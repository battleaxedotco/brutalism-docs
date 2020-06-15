export default {
  styles: {
    fields: ["Property", "Type", "Default", "Description"],
    data: [
      {
        property: "editable",
        type: "Boolean",
        default: "false",
        description: "Include editable Input next to swatch",
      },
      {
        property: "< slot >",
        type: "HTML",
        default: "false",
        description: "Slottable content to prompt on click",
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
        description: "Persistent text to display beside swatch",
      },
      {
        property: "v-model",
        type: "String",
        default: "",
        description: "Two-way binding of value prop",
      },
      {
        property: "prefs-id",
        type: "String",
        default: "",
        description: "Autosave value in localStorage",
      },
      {
        property: "disabled",
        type: "Boolean",
        default: "false",
        description: "If true, input cannot be focused",
      },
      {
        property: "read-only",
        type: "Boolean",
        default: "false",
        description: "Blocks user interaction",
      },
      {
        property: "placeholder",
        type: "String",
        default: "",
        description: "Text to display when value is null",
      },
      {
        property: "show-value",
        type: "Boolean",
        default: "false",
        description: "Show hex value instead of label",
      },
      {
        property: "uppercase",
        type: "Boolean",
        default: "false",
        description: "Value is always uppercase",
      },
    ],
  },
  events: {
    fields: ["Event", "Arguments", "Description"],
    data: [
      {
        event: "@update",
        arguments: "callback( value )",
        description: "Fires after blur event but only if a change in value",
      },
      {
        event: "@prefs",
        arguments: "callback( item )",
        description: "Returns on component mount with prefs value",
      },
    ],
  },
};
