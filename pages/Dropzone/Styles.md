<!-- Sorry! Full-screen is not shown, is the same as left for entire panel -->
<Grid height="300px">
  <Dropzone :fullscreen="false" />
  <Dropzone :fullscreen="false">
    <template v-slot:prompt>
      <div class="placeholder">v-slot:prompt not dragging</div>
    </template>
    <template v-slot:overlay>
      <div class="placeholder">v-slot:overlay while dragging</div>
    </template>
  </Dropzone>
</Grid>