<Select
  label="Alternative object syntax for items"
  :active="1"
  :items="[
    {
      label: 'Foo',
      value: 'test 1',
    },
    {
      label: 'Bar',
      value: 'test 2',
    },
  ]"
/>
<Select
  label="v-model binding"
  v-model="activeValue"
  :items="['test 1', 'test 2']"
/>
<Anno>{{ `Active value above is ${activeValue}` }}</Anno>
<Divider />
<Select
  label="Session storage"
  :items="['test 1', 'test 2', 'test 3']"
  prefs-id="selectexample"
/>
<Select
  label="Assign active item"
  :active="2"
  :items="['test 1', 'test 2', 'test 3']"
/>

<Select
  label="No indicator"
  :items="['test 1', 'test 2', 'test 3']"
  no-indicator
/>
<Select
  label="Indicator to right"
  :items="['test 1', 'test 2', 'test 3']"
  indicator-to-right
/>
