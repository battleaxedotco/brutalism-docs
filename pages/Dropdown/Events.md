<Dropdown 
  label='@update'
  :items=" [ 'Item 1', 'Item 2', 'Item 3' ]" 
  :active="0"
  @update="showUpdate" 
/>
<Dropdown 
  label='@focus/@blur' 
  :items="[
    { value: 'ILST' },
    { value: 'AEFT' }
  ]" 
  :active="1" 
  @focus="showFocus" 
  @blur="showBlur" 
/>
