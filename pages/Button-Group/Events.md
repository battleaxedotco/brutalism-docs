<Button-Group 
    label='exclusive @update' 
    exclusive 
    :active="tool" 
    @update="reportActive"
>
    <Button icon="vector-point"/>
    <Button icon="vector-line"/>
    <Button icon="vector-rectangle"/>
    <Button icon="vector-circle"/>
    <Button icon="vector-triangle"/>
    <Button icon="vector-polygon"/>
</Button-Group>
<Button-Group 
    label='multiselect @update' 
    multiselect 
    :active="[0, 1]" 
    @update="reportActive"
>
    <Button icon="chess-king" />
    <Button icon="chess-queen" />
    <Button icon="chess-bishop" />
    <Button icon="chess-knight" />
    <Button icon="chess-rook" />
    <Button icon="chess-pawn" />
</Button-Group>
<Button-Group 
    label='exclusive @update' 
    exclusive 
    :active="tool" 
    @update="val => tool = val"
>
    <Button icon="vector-point" :color="tool == 0 ? '#59e' : ''" />
    <Button icon="vector-line" :color="tool == 1 ? '#59e' : ''" />
    <Button icon="vector-rectangle" :color="tool == 2 ? '#59e' : ''" />
    <Button icon="vector-circle" :color="tool == 3 ? '#59e' : ''" />
    <Button icon="vector-triangle" :color="tool == 4 ? '#59e' : ''" />
    <Button icon="vector-polygon" :color="tool == 5 ? '#59e' : ''" />
</Button-Group>
<Button-Group label="default should use @click or :goto on children">
    <Button icon="github-circle" goto="https://www.github.com" />
    <Button icon="slack" goto="https://www.slack.com" />
    <Button icon="twitter" goto="https://www.twitter.com" />
    <Button icon="facebook" goto="https://www.facebook.com" />
</Button-Group>
