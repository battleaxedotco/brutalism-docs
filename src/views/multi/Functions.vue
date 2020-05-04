<template>
  <Content>
    <UIFold>
      <Coder lang="javascript" :content="getChildByName('Import').data" />
    </UIFold>

    <h2>evalScript</h2>
    <h4>Async function that executes pre-loaded function or raw JSX text</h4>
    <Table :content="tableData.evalScript" />
    <h4>
      Returns thenable object with returned value from JSX upon completion,
      auto-parses if returned value is JSON string
    </h4>

    <UIFold>
      <Coder lang="javascript" :content="getChildByName('evalScript').data" />
    </UIFold>
    <hr />

    <h2>loadScript</h2>
    <h4>
      Correctly loads script regardless of host application (including FLPR)
    </h4>
    <Table :content="tableData.loadScript" />
    <h4>Returns null</h4>
    <hr />

    <h2>copy</h2>
    <h4>Creates an Open File/Folder dialog native to host application.</h4>
    <Table :content="tableData.copy" />
    <h4>
      Returns target folder/file path as { path: [value] } or if failed { err:
      [msg] }
    </h4>
    <hr />

    <h2>openDialog</h2>
    <h4>Creates an Open File/Folder dialog native to host application.</h4>
    <Table :content="tableData.openDialog" />
    <h4>
      Returns target folder/file path as { path: [value] } or if failed { err:
      [msg] }
    </h4>
    <hr />

    <h2>openURL</h2>
    <h4>
      Launches any URL in new window regardless if in application or browser.
    </h4>
    <Table :content="tableData.openURL" />
    <h4>Returns null</h4>
  </Content>
  <!-- <Table :content="tableData.properties" /> -->
</template>

<script>
import template from "@/template.json";
import tableData from "../../../pages/Functions/table";

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
