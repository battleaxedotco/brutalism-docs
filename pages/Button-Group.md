## Styles

<div class="centered"><iframe style="overflow: scroll;" width="440" height="320" seamless frameborder="0" scrolling="yes" src="https://brutalism.netlify.app/#/buttons/button-group/styles"> </iframe></div>

```html
<Fold label="Styles" :open="true">
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
</Fold>
```

## Props

<div class="centered"><iframe style="overflow: scroll;" width="600" height="700" seamless frameborder="0" scrolling="yes" src="https://brutalism.netlify.app/#/buttons/button-group/props"> </iframe></div>

```html
<Fold label="Props" :open="open">
  <div style="display: flex; flex-wrap: nowrap">
    <Button-Group label='left (default)' left width="33vw">
      <Button icon="github-circle" />
      <Button icon="slack" />
    </Button-Group>
    <Button-Group label='center' center grid width="33vw">
      <Button icon="github-circle" />
      <Button icon="slack" />
    </Button-Group>
    <Button-Group label='right' right width="33vw">
      <Button icon="github-circle" />
      <Button icon="slack" />
    </Button-Group>
  </div>
  <Button-Group label='grid template="1fr 4fr"' grid template="1fr 4fr">
    <Button icon="github-circle" />
    <Button icon="slack" />
  </Button-Group>
  <Button-Group label='grid gap="50px"' grid gap="50px">
    <Button icon="github-circle" />
    <Button icon="slack" />
  </Button-Group>
  <Button-Group label='column' grid column width="60px">
    <Button icon="github-circle" />
    <Button icon="slack" />
    <Button icon="facebook" />
  </Button-Group>
  <Button-Group label='exclusive :active="1"' exclusive :active="[1]" >
    <Button icon="vector-point" />
    <Button icon="vector-line" />
    <Button icon="vector-rectangle" />
    <Button icon="vector-circle" />
    <Button icon="vector-triangle" />
    <Button icon="vector-polygon" />
  </Button-Group>
  <Button-Group 
    label='multiselect :active="[0, 1]"'
    multiselect 
    :active="[0, 1]" 
  >
    <Button icon="chess-king" />
    <Button icon="chess-queen" />
    <Button icon="chess-bishop" />
    <Button icon="chess-knight" />
    <Button icon="chess-rook" />
    <Button icon="chess-pawn" />
  </Button-Group>
</Fold>
```

## Events

<div class="centered"><iframe style="overflow: scroll;" width="480" height="700" seamless frameborder="0" scrolling="yes" src="https://brutalism.netlify.app/#/buttons/button-group/events"> </iframe></div>

```html
<Fold label="Events" :open="true">
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
    <Button icon="vector-point" :color="`${tool == 0 ? 'color-selection' : 'color-icon'}`" />
    <Button icon="vector-line" :color="`${tool == 1 ? 'color-selection' : 'color-icon'}`" />
    <Button icon="vector-rectangle" :color="`${tool == 2 ? 'color-selection' : 'color-icon'}`" />
    <Button icon="vector-circle" :color="`${tool == 3 ? 'color-selection' : 'color-icon'}`" />
    <Button icon="vector-triangle" :color="`${tool == 4 ? 'color-selection' : 'color-icon'}`" />
    <Button icon="vector-polygon" :color="`${tool == 5 ? 'color-selection' : 'color-icon'}`" />
  </Button-Group>
  <Button-Group label="default should use @click or :goto on children">
    <Button icon="github-circle" goto="https://www.github.com" />
    <Button icon="slack" goto="https://www.slack.com" />
    <Button icon="twitter" goto="https://www.twitter.com" />
    <Button icon="facebook" goto="https://www.facebook.com" />
  </Button-Group>
</Fold>
```