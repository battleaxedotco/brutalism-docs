<Toggle label="default" />
<Toggle label="Radio" radio />
<Toggle label="Switch" switch />
<Toggle label="Custom" on-icon="eye" off-icon="eye-off" />
<Toggle @update="val => slotState = val">
  <div v-if="slotState">Click me! Slot content if true</div>
  <div v-else>Click me! Slot content if false</div>
</Toggle>