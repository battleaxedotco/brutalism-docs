export default {
  properties: {
    fields: [
      'Property',
      'Type',
      'Default',
      'Description'
    ],
    data: [
      {
        property: 'refresh',
        type: 'Boolean',
        default: 'false',
        description: 'Append a "Refresh panel" to both context and flyout menus'
      },
      {
        property: 'debug',
        type: 'Boolean',
        default: 'false',
        description: 'Append a "Launch debug" option for the current debugging port'
      },
      {
        property: 'context',
        type: 'Array',
        default: '[]',
        description: 'An Array of Objects to construct the context menu'
      },
      {
        property: 'flyout',
        type: 'Array',
        default: '[]',
        description: 'An Array of Objects to construct the flyout menu'
      },
      {
        property: 'switchTheme',
        type: 'Boolean',
        default: 'false',
        description: 'Always true in Animate, to handle switch to dark/light theme variant'
      }
    ]
  },
  menus: {
    fields: [
      'Property',
      'Type',
      'Default',
      'Description'
    ],
    data: [
      {
        property: 'label',
        type: 'String',
        default: 'null',
        description: 'The text to appear on the Menu item'
      },
      {
        property: 'enabled',
        type: 'Boolean',
        default: 'true',
        description: 'If false, item is disabled and cannot be clicked'
      },
      {
        property: 'checkable',
        type: 'Boolean',
        default: 'false',
        description: 'If false, item cannot be checked or toggled'
      },
      {
        property: 'checked',
        type: 'Boolean',
        default: 'false',
        description: 'Determines the state of a checkable item'
      },
      {
        property: 'callback',
        type: 'function',
        default: 'null',
        description: 'Relative method to execute with ( item, index, value ) as params'
      },
      {
        property: 'menu',
        type: 'Array',
        default: '[]',
        description: 'Context only, provides infinitely nesting menus'
      },
      {
        property: 'icon',
        type: 'String',
        default: '',
        description: 'Context only, relative file path to icon (replaces check)'
      }
    ]
  },
  events: {
    fields: [
      'Event',
      'Arguments',
      'Description'
    ],
    data: [
      {
        event: '@contextClick',
        arguments: 'callback()',
        description: 'Method called for every click with ( item, index, value) as params'
      },
      {
        event: '@flyoutClick',
        arguments: 'callback()',
        description: 'Method called for every click with ( item, index, value) as params'
      }
    ]
  }
}