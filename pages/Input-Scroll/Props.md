<Input-Scroll label="default" />
<Input-Scroll label='set value' :value="100" />
<Input-Scroll label="auto-save" prefs-id="inputScrollProp" />
<Input-Scroll
  label='min/max values'
  :min="-100"
  :max="100"
/>
<Input-Scroll label='custom color' color="red" />
<Input-Scroll label="disabled" :value="20" disabled />
<Input-Scroll label='custom value increment' :step="2" />
<Input-Scroll
  label='custom increments per modifier key'
  :steps="[2, 5, 25]"
/>
<Input-Scroll
  label='specify decimal point'
  :value="100.125"
  :toFixed="3"
/>
<Input-Scroll
  label='reset value if empty'
  :value="446"
  :reset-value="100"
/>
<Input-Scroll label="no validation" lazy :value="29.97" suffix="fps" />
<Input-Scroll label='suffix' suffix="px" />
<Input-Scroll label='prefix' prefix="$" />