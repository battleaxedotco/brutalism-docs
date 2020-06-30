export default {
  styles: {
    fields: ["Property", "Type", "Default", "Description"],
    data: [
      {
        property: "flat",
        type: "Boolean",
        default: "false",
        description: "Container has no bg or border",
      },
      {
        property: "box",
        type: "Boolean",
        default: "false",
        description: "Container uses default Battle Axe appearance",
        todo: true,
      },
      {
        property: "disabled",
        type: "Boolean",
        default: "false",
        description: "Prevents user interaction",
      },
      {
        property: "<slot item>",
        type: "HTML",
        default: "null",
        description:
          "HTML to include inside, should use <option> tag with value prop",
      },
      {
        property: "<v-slot:indicator>",
        type: "HTML",
        default: "null",
        description: "HTML to use as a custom indicator for selected item",
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
        description: "Text to append to element",
      },
      {
        property: "items",
        type: "Array",
        default: "[]",
        description: "Menu items contained in dropdown",
      },
      {
        property: "active",
        type: "Number",
        default: "0",
        description: "Sets initial active value within items/slots",
      },
      {
        property: "v-model",
        type: "String",
        default: "",
        description: "Two-way binding of active item's value",
      },
      {
        property: "prefs-id",
        type: "String",
        default: "",
        description: "Saves to user session storage",
      },
      {
        property: "no-indicator",
        type: "Boolean",
        default: "false",
        description: "Removes the active indicator inside menu",
      },
      {
        property: "indicator-to-right",
        type: "Boolean",
        default: "false",
        description: "Show indicator to right side of menu for active item",
      },
      {
        property: "label-above",
        type: "Boolean",
        default: "false",
        description: "Shows label above element",
        todo: true,
      },
      {
        property: "width",
        type: "String",
        default: "fit-content",
        description: "Changes width of dropdown element",
        todo: true,
      },
    ],
  },
  events: {
    fields: ["Event", "Arguments", "Description"],
    data: [
      {
        event: "@update",
        arguments: "callback( value )",
        description: "Fires after blur, returns :active value",
      },
      {
        event: "@open",
        arguments: "callback()",
        description: "Fires on menu open",
      },
      {
        event: "@close",
        arguments: "callback()",
        description: "Fires on menu close",
      },
      {
        event: "@prefs",
        arguments: "callback( item )",
        description: "Fires when prefs and session value are loaded",
      },
    ],
  },
};
