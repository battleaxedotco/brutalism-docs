export default {
  styles: {
    fields: [
      'Property',
      'Type',
      'Default',
      'Description'
    ],
    data: [
      {
        property: 'flat',
        type: 'Boolean',
        default: 'false',
        description: 'No background and animation on focus'
      },
      {
        property: 'filled',
        type: 'Boolean',
        default: 'false',
        description: 'Default with focus border and dark background'
      }
    ]
  },
  properties: {
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
        default: '',
        description: 'Persistent text to display above input'
      },
      {
        property: 'v-model',
        type: 'String',
        default: '',
        description: 'Two-way binding of value prop'
      },
      {
        property: 'value',
        type: 'String',
        default: '',
        description: 'Current text within input'
      },
      {
        property: 'placeholder',
        type: 'String',
        default: '',
        description: 'Text to display when value is null'
      },
      {
        property: 'auto-select',
        type: 'Boolean',
        default: 'false',
        description: 'Select contents on focus'
      },
      {
        property: 'uppercase',
        type: 'Boolean',
        default: 'false',
        description: 'Text content is always uppercase'
      },
      {
        property: 'disabled',
        type: 'Boolean',
        default: 'false',
        description: 'If true, input cannot be focused'
      },
      {
        property: 'truncate',
        type: 'Boolean',
        default: 'false',
        description: 'Display ellipses on content overflow'
      },
      {
        property: 'copy-content',
        type: 'Boolean',
        default: 'false',
        description: 'Copies value with append-outer-icon'
      },
      {
        property: 'left',
        type: 'Boolean',
        default: 'false',
        description: 'Flat line animation starts at left'
      },
      {
        property: 'right',
        type: 'Boolean',
        default: 'false',
        description: 'Flat line animation starts at right'
      },
      {
        property: 'uppercase',
        type: 'Boolean',
        default: 'false',
        description: 'Sets transform-text to uppercase'
      },
      {
        property: 'prepend-icon',
        type: 'String',
        default: '',
        description: 'Material icon to prepend inside input'
      },
      {
        property: 'prepend-outer-icon',
        type: 'String',
        default: '',
        description: 'Material icon to prepend before input'
      },
      {
        property: 'append-icon',
        type: 'String',
        default: '',
        description: 'Material icon to append inside input'
      },
      {
        property: 'append-outer-icon',
        type: 'String',
        default: '',
        description: 'Material icon to append after input'
      },
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
        event: '@change',
        arguments: 'callback( value )',
        description: 'Fires for every keypress'
      },
      {
        event: '@update',
        arguments: 'callback( value )',
        description: 'Fires after blur event but only if a change in value'
      },
      {
        event: '@submit',
        arguments: 'callback( value )',
        description: 'Fires on form submission and enter key'
      },
      {
        event: '@focus',
        arguments: 'callback()',
        description: 'Fires on focus event of element'
      },
      {
        event: '@blur',
        arguments: 'callback()',
        description: 'Fires on blur event of element'
      },
      {
        event: '@clipboard',
        arguments: 'callback( Bool )',
        description: 'Returns confirmation of copy-content prop'
      }
    ]
  }
}