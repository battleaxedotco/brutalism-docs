<Dropdown 
  label='label-to-left' 
  :items=" [ 'Item 1', 'Item 2' ]" 
  :active="0" 
  label-to-left 
/>
<Dropdown 
  label='label-to-right' 
  :items=" [ 'Item 1', 'Item 2' ]" 
  :active="0"
  label-to-right 
/>
<Dropdown 
  label='active="ILST" (targeting item.value)' 
  :items="[
    { value: 'ILST' },
    { value: 'AEFT' }
  ]" 
  active="ILST" 
/>
<Dropdown 
  label='active="Item 3" (targeting item as string value)' 
  :items=" [ 'Item 1', 'Item 2', 'Item 3' ]" 
  active="Item 3" 
/>
<Dropdown 
  label=':active="2" (targeting index)' 
  :items="[
    { value: 'ILST' },
    { value: 'AEFT' },
    { value: 'PHXS' }
  ]" 
  :active="2" 
/>
<Dropdown 
  label='width="200px"' 
  :items=" [ 'Item 1', 'Item 2' ]" 
  :active="0" 
  width="200px" 
/>