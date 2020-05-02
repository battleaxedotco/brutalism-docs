<Grid height="400px" column>
  <Grid>
    <Dropzone :fullscreen="false" color="red" />
    <Dropzone :fullscreen="false" auto-read />
    <Dropzone :fullscreen="false" single />
  </Grid>
  <Grid>
    <Dropzone :fullscreen="false" :accepts="[ '.jpg' ]" />
    <Dropzone :fullscreen="false" read-folders />
    <Dropzone :fullscreen="false" flatten />
  </Grid>
  <Grid>
    <Dropzone :fullscreen="false" pure-svg />
    <Dropzone :fullscreen="false" auto-parse />
    <Dropzone :fullscreen="false" no-border />
  </Grid>
</Grid>