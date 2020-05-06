export default {
  styles: {
    fields: ["Property", "Type", "Default", "Description"],
    data: [
      {
        property: "flat",
        type: "Boolean",
        default: "false",
        description: "No background and animation on focus",
      },
      {
        property: "filled",
        type: "Boolean",
        default: "false",
        description: "Default with focus border and dark background",
      },
    ],
  },
  properties: {
    fields: ["Property", "Type", "Default", "Description"],
    data: [
      {
        property: "value",
        type: "String",
        default: "",
        description: "Current text within input",
      },
      {
        property: "v-model",
        type: "String",
        default: "",
        description: "Two-way binding of the value prop",
      },
      {
        property: "prefs-id",
        type: "String",
        default: "",
        description: "Autosave value in localStorage",
      },
      {
        property: "label",
        type: "String",
        default: "",
        description: "Persistent text to display above input",
      },
      {
        property: "placeholder",
        type: "String",
        default: "",
        description: "Text to display when value is null",
      },
      {
        property: "auto-select",
        type: "Boolean",
        default: "false",
        description: "Select contents on focus",
      },
      {
        property: "uppercase",
        type: "Boolean",
        default: "false",
        description: "Text content is always uppercase",
      },
      {
        property: "disabled",
        type: "Boolean",
        default: "false",
        description: "If true, input cannot be focused",
      },
      {
        property: "truncate",
        type: "Boolean",
        default: "false",
        description: "Display ellipses on content overflow",
      },
      {
        property: "left",
        type: "Boolean",
        default: "false",
        description: "Flat line animation starts at left",
      },
      {
        property: "right",
        type: "Boolean",
        default: "false",
        description: "Flat line animation starts at right",
      },
      {
        property: "uppercase",
        type: "Boolean",
        default: "false",
        description: "Sets transform-text to uppercase",
      },
      {
        property: "prepend-icon",
        type: "String",
        default: "",
        description: "Material icon to prepend inside input",
      },
    ],
  },
  events: {
    fields: ["Event", "Arguments", "Description"],
    data: [
      {
        event: "@change",
        arguments: "callback( value )",
        description: "Fires for every keypress",
      },
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
      {
        event: "@submit",
        arguments: "callback( value )",
        description: "Fires on form submission and control + enter key",
      },
      {
        event: "@focus",
        arguments: "callback()",
        description: "Fires on focus event of element",
      },
      {
        event: "@blur",
        arguments: "callback()",
        description: "Fires on blur event of element",
      },
    ],
  },
};