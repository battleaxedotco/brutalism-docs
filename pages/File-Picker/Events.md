<File-Picker @input="testInput" label="Input event" />
<File-Picker auto-read @read="testRead" label="Read event" />
<File-Picker @drop="testDrop" label="Drop event" />
<File-Picker
  auto-read
  folder
  read-folders
  flatten
  @read="testRead"
  label="All file content from incoming folders, single array"
/>
<File-Picker @prefs="testPrefs" label="Prefs event" />
<File-Picker
  auto-read
  @drop="testDrop"
  @input="testInput"
  @read="testRead"
>
  <Dropzone
    :fullscreen="false"
    auto-read
    @drop="testDrop"
    @input="testInput"
    @read="testRead"
  >
    <template v-slot:prompt>
      <div class="placeholder">
        Fully featured hybrid Dropzone/File-Picker
      </div>
    </template>
    <template v-slot:overlay>
      <div class="placeholder">v-slot:overlay while dragging</div>
    </template>
  </Dropzone>
</File-Picker>
</Display>