<Input-Scroll label="default" />
<Input-Scroll label=':value="100"' :value="100" />
<Input-Scroll
  label=':min="-100" :max="100"'
  :min="-100"
  :max="100"
/>
<Input-Scroll label='color="#ff0000"' color="red" />
<Input-Scroll label="disabled" :value="20" disabled />
<Input-Scroll label=':step="2"' :step="2" />
<Input-Scroll
  label=':steps="[2, 5, 25]"'
  :steps="[2, 5, 25]"
/>
<Input-Scroll
  label=':toFixed="3"'
  :value="100.125"
  :toFixed="3"
/>
<Input-Scroll
  label=':reset-value="100"'
  :value="446"
  :reset-value="100"
/>
<Input-Scroll label="lazy" lazy :value="29.97" suffix="fps" />
<Input-Scroll label='suffix="px"' suffix="px" />
<Input-Scroll label='prefix="page"' prefix="page" />