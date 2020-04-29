<Button-Group label="default">
    <Button icon="github-circle" />
    <Button icon="slack" />
    <Button icon="twitter" />
    <Button icon="facebook" />
</Button-Group>
<Button-Group grid label="grid">
    <Button block>block default</Button>
    <Button block left>block left</Button>
    <Button block right>block right</Button>
</Button-Group>
<Button-Group exclusive label="exclusive" :active="3">
    <Button 
        v-for="index in 7" 
        :key="index" 
        :icon="`brightness-${index}`"
    />
</Button-Group>
<Button-Group multiselect :active="[0, 1]" label="multiselect">
    <Button primary icon="format-bold" />
    <Button primary icon="format-color-text" />
    <Button primary icon="format-color-highlight" />
    <Button primary icon="format-paint" />
    <Button primary icon="format-size" />
    <Button primary icon="format-strikethrough" />
</Button-Group>
