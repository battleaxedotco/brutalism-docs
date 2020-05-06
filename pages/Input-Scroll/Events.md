<Input-Scroll label="@change" @change="changeVal" />
<Input-Scroll label="@update" @update="updateVal" />
<Input-Scroll label="@prefs" @prefs="testPrefs" prefs-id="exampleEvent" />
<Input-Scroll
  label="@focus/@blur"
  @focus="message('Focus!')"
  @blur="message('Blur!')"
/>