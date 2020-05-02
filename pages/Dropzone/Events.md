<Grid column height="400px">
  <Dropzone 
    :fullscreen="false" 
    @dragover="msg('dragover')" 
    @dragleave="msg('dragleave')" 
  />
  <Dropzone :fullscreen="false" @drop="testDrop" />
  <Dropzone :fullscreen="false" @read="testRead" />
  <Dropzone :fullscreen="false" auto-read @read="testRead" />
</Grid>