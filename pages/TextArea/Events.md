<TextArea value="@change" @change="message" />
<TextArea value="@update" @update="message" />
<TextArea value="@submit" @submit="message" />
<TextArea value="@prefs" @prefs="testPrefs" prefs-id="exampleTextAreaEvent" />
<TextArea
  value="@focus/blur"
  @focus="message('Focused!')"
  @blur="message('Blur!')"
/>