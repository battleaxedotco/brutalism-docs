## Styles

### Below number scroll even works outside of host and browser windows:

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