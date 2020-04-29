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
        description: 'Text inside button'
      },
      {
        property: 'bg',
        type: 'String',
        default: 'var(--button)',
        description: 'Background of button'
      },
      {
        property: 'color',
        type: 'String',
        default: 'var(--button-color)',
        description: 'Color for text or icons'
      },
      {
        property: 'icon',
        type: 'String',
        default: '',
        description: 'Any valid Material Design icon name'
      },
      {
        property: 'prefix-icon',
        type: 'String',
        default: '',
        description: 'Requires label prop, sets icon before'
      },
      {
        property: 'suffix-icon',
        type: 'String',
        default: '',
        description: 'Requires label prop, sets icon after'
      },
      {
        property: 'icon-size',
        type: 'Boolean',
        default: '16px',
        description: 'Size of icon inside button'
      },
      {
        property: 'uppercase',
        type: 'Boolean',
        default: 'false',
        description: 'Sets transform-text to uppercase'
      },
      {
        property: 'goto',
        type: 'String',
        default: '',
        description: 'URL to launch on click',
        class: 'functional'
      },
      {
        property: 'evalscript',
        type: 'String',
        default: '',
        description: 'EvalScript to execute on click',
        class: 'functional'
      },
      {
        property: 'left',
        type: 'Boolean',
        default: 'false',
        description: 'Aligns button content and tooltip left'
      },
      {
        property: 'right',
        type: 'Boolean',
        default: 'false',
        description: 'Aligns button content and tooltip right'
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