## Positioning

<div class="centered"><iframe style="overflow: scroll;" width="440" height="340" seamless frameborder="0" scrolling="yes" src="https://brutalism.netlify.app/#/buttons/tooltips/positioning"> </iframe></div>

```html
<Fold label="Positioning" :open="true">
  <Button-Group grid>
    <Button block tooltip="Default">Default tooltip</Button>
    <Button block no-bold tooltip="Default">No bold tooltip</Button>
    <Button block tooltip="Only opacity transition" no-slide
      >Adding no-slide prop</Button
    >
  </Button-Group>
  <Button-Group grid>
    <Button block left tooltip="Aligned to left"
      >Left prop on button also aligns tooltip</Button
    >
    <Button block right tooltip="Adding the top prop" top
      >Right and top props</Button
    >
  </Button-Group>
  <Button-Group>
    <Button
      v-for="index in 10"
      top
      tooltip="Testing long text on centered"
      :key="index"
      :icon="index < 10 ? `battery-${index}0` : 'battery'"
    />
  </Button-Group>
</Fold>
```

## Timing

<div class="centered"><iframe style="overflow: scroll;" width="440" height="340" seamless frameborder="0" scrolling="yes" src="https://brutalism.netlify.app/#/buttons/tooltips/timing"> </iframe></div>

```html
<Fold label="Timing" :open="true">
  <Row>
    <Button-Group grid>
      <Button block left
        tooltip="cubic-bezier(0.48, 0.04, 0.52, 0.96)"
        timing="var(--quad)"
        >timing="var(--quad)"</Button
      >
      <Button block
        tooltip="cubic-bezier(0.76, 0, 0.24, 1)"
        timing="cubic-bezier(0.76, 0, 0.24, 1)"
        >timing="cubic-bezier(0.76, 0, 0.24, 1)"</Button
      >
      <Button block right
        tooltip="cubic-bezier(0.84, 0, 0.16, 1)"
        timing="var(--quint)"
        >timing="var(--quint)"</Button
      >
    </Button-Group>
    <Button-Group grid>
      <Button block left
        tooltip="I'm slow to animate"
        duration="1000ms"
        >duration="1000ms"</Button
      >
      <Button block 
        tooltip="I'm slow to respond" 
        delay="1000ms"
        >delay="1000ms"</Button
      >
    </Button-Group>
  </Row>
</Fold>
```