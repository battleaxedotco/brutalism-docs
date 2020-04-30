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
        description: 'Text to append to element'
      },
      {
        property: 'label-to-left',
        type: 'Boolean',
        default: 'false',
        description: 'Set label to left of element'
      },
      {
        property: 'label-to-right',
        type: 'Boolean',
        default: 'false',
        description: 'Set label to right of element'
      },
      {
        property: 'items',
        type: 'Array',
        default: '[]',
        description: 'Menu items contained in dropdown'
      },
      {
        property: 'active',
        type: 'String | Number',
        default: 'null',
        description: 'Item to set as active on mount'
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
        event: '@update',
        arguments: 'callback( value )',
        description: 'Fires after blur, returns :active value'
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