<Input-Scroll label="@Change" @change="changeVal" />
<Input-Scroll label="@Update" @update="updateVal" />
<Input-Scroll
  label="@Focus/@Blur"
  @focus="message('Focus!')"
  @blur="message('Blur!')"
/>