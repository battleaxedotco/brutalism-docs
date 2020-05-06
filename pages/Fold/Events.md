<Fold label='@click' :open="true" @click="testClick">
  <Button label="Slot content" />
</Fold>
<Fold label='@prefs' :open="true" prefs-id="foldExampleEvent" @prefs="testPrefs">
  <Button label="Slot content" />
</Fold>