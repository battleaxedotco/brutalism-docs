<template>
  <Content>
    <h2>Styles</h2>
    <Display>
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
    </Display>
    <UIFold>
      <Coder :content="getChildByName('Styles').data" />
    </UIFold>
    <Table :content="tableData.styles" />

    <h2>Props</h2>
    <Display>
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
    </Display>
    <UIFold>
      <Coder :content="getChildByName('Props').data" />
    </UIFold>
    <Table :content="tableData.properties" />

    <h2>Events</h2>
    <Display>
      <Select
        label="@update"
        :items="['test 1', 'test 2', 'test 3']"
        @update="showUpdate"
      />
      <Select
        label="@open/@close"
        :items="['test 1', 'test 2', 'test 3']"
        @open="showOpen"
        @close="showClose"
      />
      <Select
        label="@prefs"
        :items="['test 1', 'test 2', 'test 3']"
        @prefs="showPrefs"
        prefs-id="testprefs"
      />
    </Display>
    <UIFold>
      <Coder :content="getChildByName('Events').data" />
    </UIFold>
    <Table :content="tableData.events" />
  </Content>
  <!-- <Table :content="tableData.properties" /> -->
</template>

<script>
import template from "@/template.json";
import tableData from "../../../pages/Select/table";

export default {
  data: () => ({
    activeValue: "test 1",
  }),
  computed: {
    tableData() {
      return tableData;
    },
    target() {
      return template.find((item) => {
        return item.name == this.$route.name;
      });
    },
  },
  methods: {
    getChildByName(name) {
      return this.target.children.find((item) => {
        return item.name == name;
      });
    },
    showPrefs(data) {
      console.log("PREFS:", data);
    },
    showUpdate(data) {
      console.log("UPDATE:", data);
    },
    showOpen() {
      console.log("OPEN");
    },
    showClose() {
      console.log("CLOSE");
    },
  },
  components: {
    Content: require("@/components/Content.vue").default,
    Display: require("@/components/Display.vue").default,
    Coder: require("@/components/Codeking.vue").default,
    Table: require("@/components/Table.vue").default,
    UIFold: require("@/components/UIFold.vue").default,
  },
};
</script>

<style></style>
