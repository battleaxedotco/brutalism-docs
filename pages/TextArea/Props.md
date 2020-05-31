<TextArea label='I am a label' />
<TextArea
  label='placeholder="Display if no value"'
  placeholder="Display if no value"
/>
<TextArea placeholder="auto-save" prefs-id="textAreaProps" value="I autosave on update" />
<TextArea placeholder="disabled" disabled />
<TextArea value='custom color' color="red" flat />
<TextArea 
  value="This text is automatically selected on focus" 
  label="auto-select" 
  auto-select 
/>
<Input value="Warn of mispelings" label='spellcheck' :spellcheck="true" />
<TextArea placeholder='custom row count' :rows="5" />
<TextArea placeholder="truncate" value='Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.' color="red" />
<TextArea
  placeholder='underline size and direction'
  underline-size="2px"
  flat
  left
/>
<TextArea
  filled
  prepend-icon="magnify"
  placeholder='prepend icon'
/>
