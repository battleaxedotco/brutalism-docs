<Button-Group grid column>
  <Button @click="testClick" label='@click="testClick"' />
  <Button 
    evalScript="testEvalScript()" 
    @evalScript="reportEval" 
    label='@evalScript' 
  />
  <Button 
    :evalScript="`testEvalScript('${ JSON.stringify({ msg: 'data' }) }')`" 
    @evalScript="reportEval" 
    label='template literal evalScript' 
  />
  <Button 
    copy="Copy this text on click" 
    label='@clipboard="reportClipboardSuccess"'
    @clipboard="reportClipboardSuccess"
  />
</Button-Group>