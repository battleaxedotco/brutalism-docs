<template>
  <Content>
    <Note
      >Many functions of File-Picker cannot work in browser, notably folder
      picking and returning file contents of dropped folders. Sorry! Has to be
      done in Adobe.
    </Note>
    <h2>Styles</h2>
    <Display>
      <File-Picker label="default" />
      <File-Picker flat label="flat" />
      <File-Picker filled label="filled" />
      <File-Picker multiple label="Multiple switches to TextArea" />
      <File-Picker disabled ref="sample6" label="disabled" />
      <File-Picker read-only label="read-only" />
      <File-Picker>
        <Dropzone :fullscreen="false">
          <template v-slot:prompt>
            <div class="placeholder">
              Slots! This is a Dropzone inside a File-Picker. Drop files or
              click me, same functionality.
            </div>
          </template>
          <template v-slot:overlay>
            <div class="placeholder" />
          </template>
        </Dropzone>
      </File-Picker>
    </Display>
    <UIFold>
      <Coder :content="getChildByName('Styles').data" />
    </UIFold>
    <Table :content="tableData.styles" />
    <h2>Props</h2>
    <Display>
      <File-Picker label="Custom label" />
      <File-Picker folder label="Folders (doesn't work in browser)" />
      <File-Picker width="fit-content" label="Custom width" />
      <File-Picker
        placeholder="You need to select a file"
        label="Custom placeholder"
      />
      <File-Picker prefs-id="filepicker" label="Persistant storage" />
      <File-Picker icon="home" label="Custom icon" />
      <File-Picker multiple label="Accept multiple files/folders" />
      <File-Picker auto-read label="Return file contents instead of paths" />
      <File-Picker
        :accepts="['.png', '.jpg']"
        label="Accept only .png and .jpg"
      />
      <File-Picker clearable ref="sample1" label="clearable" />
      <File-Picker
        clearable
        clear-icon="delete"
        ref="sample2"
        label="custom clear icon"
      />
      <File-Picker
        :depth="2"
        ref="sample3"
        label="Show parent folders by depth count"
      />
      <File-Picker
        multiple
        :rows="4"
        :resizeable="false"
        ref="sample7"
        label="Not resizable and custom row count"
      />
      <File-Picker
        prefix=".../"
        multiple
        ref="sample4"
        label="Custom prefix per item"
      />
      <File-Picker
        auto-read
        @read="testRead"
        label="Return file content instead of path"
      />
      <File-Picker
        folder
        read-folders
        @read="testRead"
        label="(No browser) Return folder children contents instead of folder path"
      />
      <File-Picker
        folder
        read-folders
        flatten
        multiple
        @read="testRead"
        label="(No browser) Return all children files as single array"
      />
    </Display>
    <UIFold>
      <Coder :content="getChildByName('Props').data" />
    </UIFold>
    <Table :content="tableData.properties" />

    <h2>Events</h2>
    <Display>
      <File-Picker @input="testInput" label="Input event" />
      <File-Picker auto-read @read="testRead" label="Read event" />
      <File-Picker @drop="testDrop" label="Drop event" />
      <File-Picker
        auto-read
        folder
        read-folders
        flatten
        @read="testRead"
        label="All file content from incoming folders, single array"
      />
      <File-Picker ref="sample5" @prefs="testPrefs" label="Prefs event" />
      <File-Picker
        auto-read
        @drop="testDrop"
        @input="testInput"
        @read="testRead"
      >
        <Dropzone
          :fullscreen="false"
          auto-read
          @drop="testDrop"
          @input="testInput"
          @read="testRead"
        >
          <template v-slot:prompt>
            <div class="placeholder">
              Fully featured hybrid Dropzone/File-Picker
            </div>
          </template>
          <template v-slot:overlay>
            <div class="placeholder">v-slot:overlay while dragging</div>
          </template>
        </Dropzone>
      </File-Picker>
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
import tableData from "../../../pages/File-Picker/table";

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
    testInput(value) {
      console.log("Input value:", value);
    },
    testRead(value) {
      console.log("Read value:", value);
    },
    testDrop(value) {
      console.log("Drop value:", value);
    },
    testCancel() {
      console.log("User canceled");
    },
    testPrefs() {
      console.log("Prefs value:", value);
    },
  },
  mounted() {
    let test = ["foo/bar/file.json", "foo/bar/example.json"];
    this.$refs.sample1.set(test);
    this.$refs.sample2.set(test);
    this.$refs.sample3.set(test);
    this.$refs.sample4.set(test);
    this.$refs.sample5.set(test);
    this.$refs.sample6.set(test);
    this.$refs.sample7.set(test);
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
