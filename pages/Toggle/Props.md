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
<Toggle label='custom color' color="#46a0f2" />
<Toggle label='auto-save' prefs-id="togglePropsExample" />
<Toggle label="disabled" :state="true" disabled />
<Toggle 
  label='custom on/off icons' 
  on-icon="alarm" 
  off-icon="alarm-off"
/>
<Toggle label='custom icon size' size="32px" />