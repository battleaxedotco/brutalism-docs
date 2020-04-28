## Styles

<div class="centered"><iframe style="overflow: scroll;" width="440" height="280" seamless frameborder="0" scrolling="yes" src="https://brutalism.netlify.app/#/inputs/input-scroll/styles"> </iframe></div>


```html
<Fold label="Styles" :open="true">
    <Input-Scroll label="default" :value="100" />
    <Input-Scroll label="flat" flat :value="100" />
    <Input-Scroll label="filled" filled :value="100" />
    <Input-Scroll
        label="underline-size"
        underline-size="2px"
        :value="100"
    />
    <Input-Scroll
        label="left"
        flat
        underline-size="3px"
        left
        :value="100"
    />
</Fold>
```

## Props and Events

<div class="centered"><iframe style="overflow: scroll;" width="440" height="480" seamless frameborder="0" scrolling="yes" src="https://brutalism.netlify.app/#/inputs/input-scroll/props"> </iframe></div>

```html
<Fold label="Props" :open="true">
    <Input-Scroll label="default" />
    <Input-Scroll
        label=':min="0" :max="200"'
        :value="100"
        :min="0"
        :max="200"
    />
    <Input-Scroll
        label=':modifier=".125"'
        :value="205"
        :modifier="0.125"
    />
    <Input-Scroll
        label=':modifier="5"'
        :value="5000"
        :modifier="5"
    />
    <Input-Scroll
        label=':steps="[0.25, 5, 25]"'
        :steps="[0.25, 5, 25]"
        :value="50"
        :toFixed="2"
    />
    <Input-Scroll label=':step="2"' :step="2" />
    <Input-Scroll
        label='color="#ff0000"'
        :value="800"
        color="red"
    />
    <Input-Scroll
        label=':toFixed="3"'
        :value="100.125"
        :toFixed="3"
        :modifier="0.125"
    />
    <Input-Scroll
        label='suffix="px"'
        suffix="px"
        :min="0"
        :max="100"
    />
    <Input-Scroll
        label=':reset-value="100"'
        :value="446"
        :reset-value="100"
    />
    <Input-Scroll label="lazy" lazy :value="29.97" suffix="fps" />
    <Input-Scroll label="disabled" :value="20" disabled />
</Fold>

<!-- Open the console to see -->

<Fold label="Events" :open="true">
    <Input-Scroll
        label="Change/Update"
        @change="changeVal"
        @update="updateVal"
        :min="-100"
        :max="100"
    />
    <Input-Scroll
        label="Focus/Blur"
        @focus="message('Focus!')"
        @blur="message('Blur!')"
    />
    <Input-Scroll label="debug" debug />
</Fold>
```
