export default {
  styles: {
    fields: ["Property", "Type", "Default", "Description"],
    data: [
      {
        property: "",
        type: "",
        default: "",
        description: "",
      },
    ],
  },
  properties: {
    fields: ["Property", "Type", "Default", "Description"],
    data: [
      {
        property: "label",
        type: "String",
        default: "",
        description: "Text to appear before folding icon",
      },
      {
        property: "open",
        type: "Boolean",
        default: "false",
        description: "Reactive prop to open and shut component",
      },
      {
        property: "prefs-id",
        type: "String",
        default: "",
        description: "Autosave value in localStorage",
      },
      {
        property: "persistent",
        type: "Boolean",
        default: "true",
        description: "If false, contents are destroyed when shut",
      },
      {
        property: "inner-padding",
        type: "String",
        default: "",
        description: "Padding assigned between parent and slot",
      },
    ],
  },
  events: {
    fields: ["Event", "Arguments", "Description"],
    data: [
      {
        event: "@click",
        arguments: "callback()",
        description: "Method to execute on native click event",
      },
      {
        event: "@prefs",
        arguments: "callback( item )",
        description: "Returns on component mount with prefs value",
      },
    ],
  },
};
