## Styles

<div class="centered"><iframe style="overflow: scroll;" width="440" height="280" seamless frameborder="0" scrolling="yes" src="https://brutalism.netlify.app/#/inputs/input/styles"> </iframe></div>


```html
<Fold label="Styles" :open="getFoldData('input', 'styles').open">
    <Input
        label="Default" truncate 
        value="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris."
    />
    <Input value="value" flat label="Flat" auto-select />
    <Input value="value" filled label="Filled" />
</Fold>

```

## Props

<div class="centered"><iframe style="overflow: scroll;" width="440" height="480" seamless frameborder="0" scrolling="yes" src="https://brutalism.netlify.app/#/inputs/input/props"> </iframe></div>

```html
<Fold label="Props">
    <Input
        label='placeholder="Display if no value"'
        placeholder="Display if no value"
    />
    <Input value="This text is automatically selected on focus" label="auto-select" auto-select />
    <Input value="This text is always uppercase" label="uppercase" uppercase />
    <Input placeholder="disabled" disabled />
    <Input
        placeholder='underline-size="2px" left'
        underline-size="2px"
        flat
        left
    />
    <Input
        filled
        margin="0px 0px 4px 0px"
        prepend-icon="magnify"
        placeholder='prepend-icon="magnify"'
    />
    <Input
        filled
        append-icon="find-replace"
        placeholder='prepend-icon="find-replace"'
        margin="0px"
    />
    <Input
        filled
        margin="0px"
        prepend-outer-icon="magnify"
        placeholder='prepend-outer-icon="magnify"'
    />
    <Input
        filled
        margin="0px"
        append-outer-icon="find-replace"
        placeholder='append-outer-icon="find-replace"'
    />
</Fold>
```

## Events

<div class="centered"><iframe style="overflow: scroll;" width="440" height="480" seamless frameborder="0" scrolling="yes" src="https://brutalism.netlify.app/#/inputs/input/events"> </iframe></div>

```html
<!-- Open the console to see -->

<Fold label="Events">
    <Input value="@change" @change="message" />
    <Input value="@update" @update="message" />
    <Input value="@submit" @submit="message" />
    <Input
        placeholder="@focus/blur"
        @focus="message('Focused!')"
        @blur="message('Blur!')"
    />
    <Input value="@append-outer-click content" append-outer-icon="find-replace" @append-outer-click="message" />
</Fold>
```