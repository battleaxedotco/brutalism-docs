<Select label="default" :items="['test 1', 'test 2', 'test 3']" />
<Select flat label="flat" :items="['test 1', 'test 2', 'test 3']" />

<Select label="Slot items">
  <option value="mercury">Mercury</option>
  <option label="I'm a slot" value="mars">
    <div></div>
  </option>
  <option value="venus">
    <Icon name="home" size="16px" />
  </option>
</Select>

<Select label="Slot indicator" :items="['test 1', 'test 2']">
  <template v-slot:indicator>
    <Icon name="close" />
  </template>
</Select>

<Select
  label="disabled"
  :items="['test 1', 'test 2', 'test 3']"
  disabled
/>
