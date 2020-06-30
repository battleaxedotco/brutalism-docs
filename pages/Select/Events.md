<Select
  label="@update"
  :items="['test 1', 'test 2', 'test 3']"
  @update="showUpdate"
/>
<Select
  label="@open/@close"
  :items="['test 1', 'test 2', 'test 3']"
  @open="showOpen"
  @close="showClose"
/>
<Select
  label="@prefs"
  :items="['test 1', 'test 2', 'test 3']"
  @prefs="showPrefs"
  prefs-id="testprefs"
/>