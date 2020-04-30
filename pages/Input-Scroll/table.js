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
        property: 'value',
        type: 'String',
        default: '',
        description: 'Current text within input'
      },
      {
        property: 'label',
        type: 'String',
        default: '',
        description: 'Text to display beside input'
      },
      {
        property: 'min',
        type: 'Number',
        default: 'null',
        description: 'Minimum value allowed'
      },
      {
        property: 'max',
        type: 'Number',
        default: 'null',
        description: 'Maximum value allowed'
      },
      {
        property: 'color',
        type: 'String',
        default: 'var(--color-selection)',
        description: 'Color on focus'
      },
      {
        property: 'disabled',
        type: 'Boolean',
        default: 'false',
        description: 'If true, prevents all mouse events'
      },
      {
        property: 'step',
        type: 'Number',
        default: '1',
        description: 'Amount to increment per event'
      },
      {
        property: 'steps',
        type: 'Array',
        default: '[0.1, 1, 10]',
        description: 'Control, default, shift key increment'
      },
      {
        property: 'toFixed',
        type: 'Number',
        default: 'null',
        description: 'Strict digits to appear after decimal'
      },
      {
        property: 'reset-value',
        type: 'Number',
        default: '0',
        description: 'Value to insert when left empty'
      },
      {
        property: 'lazy',
        type: 'Boolean',
        default: 'false',
        description: 'Non-strict, any decimals or value'
      },
      {
        property: 'suffix',
        type: 'String',
        default: '',
        description: 'Text to append to value'
      },
      {
        property: 'prefix',
        type: 'String',
        default: '',
        description: 'Text to prepend to value'
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
      }
    ]
  }
}