<Input label="I am a label" />
<Input v-model="twoWayBinding" :label="twoWayBinding" />
<Input
  label='placeholder="Display if no value"'
  placeholder="Display if no value"
/>
<Input prefs-id="exampleInput" label="autosave value" value="I autosave my own value" />
<Input placeholder="disabled" disabled />
<Input placeholder='Custom color' color="red" flat />
<Input 
  value="This text is automatically selected on focus" 
  label="auto-select" 
  auto-select 
/>
<Input value="This text is always uppercase" label="uppercase" uppercase />
<Input value="Warn of mispelings" label='spellcheck' spellcheck="true" />
<Input
  label="truncate" truncate 
  value="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris."
/>
<Input
  label="copy-content" copy-content 
  value="I'm automatically copied on click"
/>
<Input
  placeholder='underline size and direction'
  underline-size="2px"
  flat
  left
/>
<Input
  filled
  prepend-icon="magnify"
  placeholder='prepend icon'
/>
<Input
  filled
  append-icon="find-replace"
  placeholder='append icon'
/>
<Input
  filled
  prepend-outer-icon="magnify"
  placeholder='prepend outer icon'
/>
<Input
  filled
  append-outer-icon="find-replace"
  placeholder='append outer icon'
/>