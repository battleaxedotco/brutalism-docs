<Input value="@change" @change="message" />
<Input value="@update" @update="message" />
<Input value="@submit" @submit="message" />
<Input
  value="@focus/blur"
  @focus="message('Focused!')"
  @blur="message('Blur!')"
/>
<Input 
  value="@append-outer-click" 
  append-outer-icon="find-replace" 
  @append-outer-click="message" 
/>