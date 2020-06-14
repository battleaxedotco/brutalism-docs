export default {
  styles: {
    fields: ["Property", "Type", "Default", "Description"],
    data: [
      {
        property: "flat",
        type: "Boolean",
        default: "false",
        description: "Inherits Input/TextArea flat style",
      },
      {
        property: "filled",
        type: "Boolean",
        default: "false",
        description: "Inherits Input/TextArea filled style",
      },
      {
        property: "< slot >",
        type: "HTML",
        default: "null",
        description: "Content to prompt File-Picker on click",
      },
      {
        property: "< slot:icon >",
        type: "HTML",
        default: "null",
        description: "HTML to append to the element",
        todo: true,
      },
      {
        property: "< slot:clear >",
        type: "HTML",
        default: "null",
        description: "HTML to use as a clearable button",
        todo: true,
      },
    ],
  },
  properties: {
    fields: ["Property", "Type", "Default", "Description"],
    data: [
      {
        property: "label",
        type: "String",
        default: "Choose [type]",
        description: "Persistent text to display above input",
      },
      {
        property: "folder",
        type: "Boolean",
        default: "false",
        description: "When true accept Folders, otherwise Files",
      },
      {
        property: "width",
        type: "String",
        default: "100%",
        description: "Any valid CSS value",
      },
      {
        property: "prefs-id",
        type: "String",
        default: "",
        description: "Autosave value in localStorage",
      },
      {
        property: "icon",
        type: "String",
        default: "[file|folder]-outline",
        description: "Icon to append to element",
      },
      {
        property: "disabled",
        type: "Boolean",
        default: "false",
        description: "Block all user interaction with faded appearance",
      },
      {
        property: "read-only",
        type: "Boolean",
        default: "false",
        description: "Block all user interaction",
      },
      {
        property: "multiple",
        type: "Boolean",
        default: "false",
        description: "Whether to use TextArea and allow multiple items",
      },
      {
        property: "accepts",
        type: "Array | String",
        default: "*",
        description: "File extensions or Mimetype to validate dropped files",
      },
      {
        property: "clearable",
        type: "Boolean",
        default: "false",
        description: "Whether to append a button to reset component",
      },
      {
        property: "clear-icon",
        type: "String",
        default: "clear",
        description: "Icon to use within clearable button",
      },
      {
        property: "depth",
        type: "Number",
        default: "0",
        description: "Folders above target to display in element",
      },
      {
        property: "prefix",
        type: "String",
        default: "./",
        description: "Text to append to all targets",
      },
      {
        property: "encoding",
        type: "String",
        default: "utf-8",
        description: "Encoding to use when reading file content",
      },
      {
        property: "auto-read",
        type: "Boolean",
        default: "false",
        description: "Whether to return file content as text",
      },
      {
        property: "auto-parse",
        type: "Boolean",
        default: "true",
        description: "Auto-parse JSONs before emitting @read event",
      },
      {
        property: "read-folders",
        type: "Boolean",
        default: "false",
        description:
          "When true, return files of folders. False returns folder path",
      },
      {
        property: "flatten",
        type: "Boolean",
        default: "false",
        description: "Returns all folders result as a single array",
      },
      {
        property: "cols",
        type: "Number",
        default: "2",
        description: "Default columns of TextArea when using multiple prop",
      },
      {
        property: "resizeable",
        type: "Boolean",
        default: "true",
        description: "When false, disallow user resizing of TextArea",
      },
      {
        property: "placeholder",
        type: "String",
        default: "No file selected",
        description: "Text to display when component has no value",
      },
    ],
  },
  events: {
    fields: ["Event", "Arguments", "Description"],
    data: [
      {
        event: "@read",
        arguments: "callback( value )",
        description: "Returns String or Array of file contents",
      },
      {
        event: "@input",
        arguments: "callback( value )",
        description: "Returns String or Array of file paths",
      },
      {
        event: "@drop",
        arguments: "callback( value )",
        description: "Returns data transfer File List Array",
      },
      {
        event: "@prefs",
        arguments: "callback( value )",
        description: "Returns on component mount with previous value",
      },
      {
        event: "@cancel",
        arguments: "callback()",
        description: "Returns when user clicks Cancel in File Picker dialog",
      },
    ],
  },
};
