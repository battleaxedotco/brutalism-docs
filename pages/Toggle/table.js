export default {
  styles: {
    fields: ["Property", "Type", "Default", "Description"],
    data: [
      {
        property: "radio",
        type: "Boolean",
        default: "false",
        description: "Use a radio style control",
      },
      {
        property: "switch",
        type: "Boolean",
        default: "false",
        description: "Use a toggle switch control",
      },
    ],
  },
  properties: {
    fields: ["Property", "Type", "Default", "Description"],
    data: [
      {
        property: "state",
        type: "Boolean",
        default: "false",
        description: "The checked value of the element",
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
        description: "Text to appear before element",
      },
      {
        property: "on-icon",
        type: "String",
        default: "",
        description: "Material icon to use as true state",
      },
      {
        property: "off-icon",
        type: "String",
        default: "",
        description: "Material icon to use as false state",
      },
      {
        property: "color",
        type: "String",
        default: "var(--color-icon)",
        description: "Color of icon and label",
      },
      {
        property: "disabled",
        type: "Boolean",
        default: "false",
        description: "If true prevent all mouse events",
      },
      {
        property: "size",
        type: "String",
        default: "18px",
        description: "Any valid CSS for size of icon",
      },
    ],
  },
  events: {
    fields: ["Event", "Arguments", "Description"],
    data: [
      {
        event: "@click",
        arguments: "callback()",
        description: "Fires on all clicks to element",
      },
      {
        event: "@update",
        arguments: "callback( value )",
        description: "Fires after any state change and returns new value",
      },
      {
        event: "@prefs",
        arguments: "callback( item )",
        description: "Returns on component mount with prefs value",
      },
      {
        event: "@mouseEnter",
        arguments: "callback()",
        description: "Fires on mouseEnter event of element",
      },
      {
        event: "@mouseExit",
        arguments: "callback()",
        description: "Fires on mouseExit event of element",
      },
    ],
  },
};