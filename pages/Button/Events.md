<Button-Group grid>
  <Button @click="testClick" label='@click="testClick"' />
  <Button evalscript="anyJSXFunction()" @evalscript="returnResult" label='@evalscript' />
</Button-Group>