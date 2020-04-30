<Row>
  <Toggle on-icon="lock" off-icon="lock-open-variant" />
  <Toggle on-icon="bell" off-icon="bell-off" />
  <Toggle on-icon="account" off-icon="account-off" />
  <Toggle on-icon="video-check" off-icon="video-minus" />
</Row>
<Toggle 
  :label='dynamicState' 
  :state="realState" 
  @update="val => realState = val"
/>
<Toggle label='color="#46a0f2"' color="#46a0f2" />
<Toggle label="disabled" :state="true" disabled />
<Toggle 
  label='on-icon="alarm" off-icon="alarm-off"' 
  on-icon="alarm" 
  off-icon="alarm-off"
/>
<Toggle label='size="32px"' size="32px" />