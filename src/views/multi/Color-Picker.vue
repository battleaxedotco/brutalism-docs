<template>
  <Content>
    <Note
      >Many functions of Color-Picker cannot work in browser, notably launching
      the host app picker on swatch click. Sorry! Has to be done in Adobe.
    </Note>
    <h2>Styles</h2>
    <Display>
      <Color-Picker label="Color picker" />
      <Anno size="12px"
        >Below has an editable Input component for hex value:</Anno
      >
      <Color-Picker editable ref="test1" />
      <Color-Picker editable filled />
      <Color-Picker editable flat />
      <Color-Picker>
        <Button>I'm slot content that prompts the picker on click</Button>
      </Color-Picker>
      <Color-Picker disabled label="disabled" />
      <Color-Picker read-only label="read-only" />
    </Display>
    <UIFold>
      <Coder :content="getChildByName('Styles').data" />
    </UIFold>
    <Table :content="tableData.styles" />

    <h2>Props</h2>
    <Display>
      <Color-Picker label="Custom label" />
      <Color-Picker v-model="example" label="v-model sync" />
      <Color-Picker prefs-id="colorpickerpref" label="Autosave data" />
      <Color-Picker placeholder="NONE" editable />
      <Color-Picker show-value ref="test2" />
      <Color-Picker uppercase label="uppercase" ref="test3" />
    </Display>
    <UIFold>
      <Coder :content="getChildByName('Props').data" />
    </UIFold>
    <Table :content="tableData.properties" />

    <h2>Events</h2>
    <Display>
      <Anno size="12px">Update:</Anno>
      <Color-Picker label="update" @update="showUpdate" editable />
      <Color-Picker prefs-id="examplepicker" @prefs="showPrefs" />
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
import tableData from "../../../pages/Color-Picker/table";

export default {
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
    showPrefs(value) {
      console.log("Prefs:", value);
    },
    showUpdate(value) {
      console.log("Update:", value);
    },
  },
  data: () => ({
    example: "#ff00aa",
  }),
  mounted() {
    this.$refs.test1.inputval = "ff0000";
    this.$refs.test1.realValue = "#ff0000";
    this.$refs.test2.realValue = "#46a0f5";
    this.$refs.test3.realValue = "#aa00ff";
  },
  components: {
    Content: require("@/components/Content.vue").default,
    Display: require("@/components/Display.vue").default,
    Coder: require("@/components/Codeking.vue").default,
    Table: require("@/components/Table.vue").default,
    UIFold: require("@/components/UIFold.vue").default,
    Note: require("@/components/Note.vue").default,
  },
};
</script>

<style></style>
