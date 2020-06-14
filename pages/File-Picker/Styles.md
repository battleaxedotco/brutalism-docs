<File-Picker label="default" />
<File-Picker flat label="flat" />
<File-Picker filled label="filled" />
<File-Picker multiple label="Multiple switches to TextArea" />
<File-Picker disabled label="disabled" />
<File-Picker read-only label="read-only" />
<File-Picker>
  <Dropzone :fullscreen="false">
    <template v-slot:prompt>
      <div class="placeholder">
        Slots! This is a Dropzone inside a File-Picker. Drop files or
        click me, same functionality.
      </div>
    </template>
    <template v-slot:overlay>
      <div class="placeholder" />
    </template>
  </Dropzone>
</File-Picker>
