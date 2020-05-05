<template>
  <Content>
    <h2>Styles</h2>
    <Display>
      <Grid height="300px">
        <Dropzone :fullscreen="false" />
        <Dropzone :fullscreen="false">
          <template v-slot:prompt>
            <div class="placeholder">v-slot:prompt not dragging</div>
          </template>
          <template v-slot:overlay>
            <div class="placeholder">v-slot:overlay while dragging</div>
          </template>
        </Dropzone>
      </Grid>
    </Display>
    <div class="centered">
      <div style="margin-top: 20px;" draggable="true" class="droplet">Drag me to test above</div>
    </div>
    <UIFold>
      <Coder :content="getChildByName('Styles').data" />
    </UIFold>
    <Table :content="tableData.styles" />

    <h2>Props</h2>
    <Display>
      <Grid height="400px" column>
        <Grid>
          <Dropzone :fullscreen="false" color="red" />
          <Dropzone :fullscreen="false" auto-read />
          <Dropzone :fullscreen="false" single />
        </Grid>
        <Grid>
          <Dropzone :fullscreen="false" :accepts="[ '.jpg' ]" />
          <Dropzone :fullscreen="false" read-folders />
          <Dropzone :fullscreen="false" flatten />
        </Grid>
        <Grid>
          <Dropzone :fullscreen="false" pure-svg />
          <Dropzone :fullscreen="false" auto-parse />
          <Dropzone :fullscreen="false" no-border />
        </Grid>
      </Grid>
    </Display>
    <div class="centered">
      <div style="margin-top: 20px;" draggable="true" class="droplet">Drag me to test above</div>
    </div>
    <UIFold>
      <Coder :content="getChildByName('Props').data" />
    </UIFold>
    <Table :content="tableData.properties" />

    <h2>Events</h2>
    <Display>
      <Grid column height="400px">
        <Dropzone :fullscreen="false" @dragover="msg('dragover')" @dragleave="msg('dragleave')" />
        <Dropzone :fullscreen="false" @drop="testDrop" />
        <Dropzone :fullscreen="false" @read="testRead" />
        <Dropzone :fullscreen="false" auto-read @read="testRead" />
      </Grid>
    </Display>
    <div class="centered">
      <div
        style="margin-top: 20px;"
        draggable="true"
        class="droplet"
      >For best results use an actual file</div>
    </div>
    <UIFold>
      <Coder :content="getChildByName('Events').data" />
    </UIFold>
    <Table :content="tableData.events" />
  </Content>
  <!-- <Table :content="tableData.properties" /> -->
</template>


<script>
import template from "@/template.json";
import tableData from "../../../pages/Dropzone/table";

export default {
  computed: {
    tableData() {
      return tableData;
    },
    target() {
      return template.find(item => {
        return item.name == this.$route.name;
      });
    }
  },
  methods: {
    getChildByName(name) {
      return this.target.children.find(item => {
        return item.name == name;
      });
    },
    testRead(val) {
      console.log("@read:", val);
    },
    testDrop(val) {
      console.log("@drop:", val);
    },
    msg(val) {
      console.log(val);
    }
  },
  mounted() {
    window.addEventListener("drop", e => {
      e.preventDefault();
    });
    window.addEventListener("dragover", e => {
      e.preventDefault();
    });
  },
  components: {
    Content: require("@/components/Content.vue").default,
    Display: require("@/components/Display.vue").default,
    Coder: require("@/components/Codeking.vue").default,
    Table: require("@/components/Table.vue").default,
    UIFold: require("@/components/UIFold.vue").default
  }
};
</script>

<style>
.droplet {
  padding: 10px 20px;
  background: var(--text);
  color: var(--bg);
  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  border-radius: 5px;
}

.droplet:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}
</style>