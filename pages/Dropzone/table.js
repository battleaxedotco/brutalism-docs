export default {
  styles: {
    fields: ["Property", "Type", "Default", "Description"],
    data: [
      {
        property: "fullscreen",
        type: "Boolean",
        default: "true",
        description: "True overlays panel body, false inherits size",
      },
      {
        property: "< slot:prompt >",
        type: "HTML",
        default: "null",
        description: "HTML to show when user is not dragging",
      },
      {
        property: "< slot:overlay >",
        type: "HTML",
        default: "null",
        description: "HTML to show when user is dragging",
      },
    ],
  },
  properties: {
    fields: ["Property", "Type", "Default", "Description"],
    data: [
      {
        property: "color",
        type: "String",
        default: "var(--color-selection)",
        description: "CSS value for indicator border",
      },
      {
        property: "auto-read",
        type: "Boolean",
        default: "false",
        description: "Whether to return file content as text",
      },
      {
        property: "single",
        type: "Boolean",
        default: "false",
        description: "When true only accept a single drop object",
      },
      {
        property: "accepts",
        type: "Array | String",
        default: ".*",
        description: "Regex to validate dropped files",
      },
      {
        property: "read-folders",
        type: "Boolean",
        default: "false",
        description: "Whether to return content of dropped folders",
      },
      {
        property: "flatten",
        type: "Boolean",
        default: "false",
        description: "Returns a single array instead of multiple",
      },
      {
        property: "pure-svg",
        type: "Boolean",
        default: "false",
        description: "In ILST, return SVG of dropped content from app",
      },
      {
        property: "auto-parse",
        type: "Boolean",
        default: "true",
        description: "Auto-parse JSONs before emitting @read event",
      },
      {
        property: "no-border",
        type: "Boolean",
        default: "false",
        description: "Hide the indicator border on dragover",
      },
      {
        property: "html",
        type: "Boolean",
        default: "false",
        description: "Read dropped HTML instead of files",
        todo: true,
      },
    ],
  },
  events: {
    fields: ["Event", "Arguments", "Description"],
    data: [
      {
        event: "@dragover",
        arguments: "callback( )",
        description: "Fires on element dragover event",
      },
      {
        event: "@dragleave",
        arguments: "callback( )",
        description: "Fires on element dragleave event",
      },
      {
        event: "@drop",
        arguments: "callback( value )",
        description: "Returns data transfer File List Array",
      },
      {
        event: "@read",
        arguments: "callback( value )",
        description: "Returns String or Array of result",
      },
    ],
  },
};
