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
        property: 'primary',
        type: 'Boolean',
        default: 'false',
        description: 'Sharp border and active state'
      },
      {
        property: 'flat',
        type: 'Boolean',
        default: 'false',
        description: 'Subtle appearance and active state'
      },
      {
        property: 'filled',
        type: 'Boolean',
        default: 'false',
        description: 'Primary button with no idle border'
      },
      {
        property: 'disabled',
        type: 'Boolean',
        default: 'false',
        description: 'Prevent all mouse events'
      },
      {
        property: 'tall',
        type: 'Boolean',
        default: 'false',
        description: 'Add extra padding and min-height'
      },
      {
        property: 'toolbar',
        type: 'Boolean',
        default: 'false',
        description: 'Fixed proportional size'
      },
      {
        property: 'block',
        type: 'Boolean',
        default: 'false',
        description: 'Greedy space fill alone, flexible in Button-Group'
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
        property: 'evalScript',
        type: 'String',
        default: '',
        description: 'async evalScript to execute on click',
        class: 'functional'
      },
      {
        property: 'copy',
        type: 'String',
        default: '',
        description: 'Text to copy on clicking the element',
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
        event: '@click',
        arguments: 'callback()',
        description: 'Method to execute on native click event'
      },
      {
        event: '@evalScript',
        arguments: 'callback( value )',
        description: 'Returns auto-parsed JSON value of evalScript prop'
      },
      {
        event: '@clipboard',
        arguments: 'callback( Bool )',
        description: 'Returns confirmation of copy prop'
      }
    ]
  },
  tooltips: {
    fields: [
      'Property',
      'Type',
      'Default',
      'Description'
    ],
    data: [
      {
        property: 'tooltip',
        type: 'String',
        default: '',
        description: 'Text to display, no tooltip if none'
      },
      {
        property: 'top',
        type: 'Boolean',
        default: 'false',
        description: 'Aligns tooltips above button'
      },
      {
        property: 'delay',
        type: 'String',
        default: '0.4s',
        description: 'Any valid CSS transition delay'
      },
      {
        property: 'duration',
        type: 'String',
        default: '160ms',
        description: 'Any valid CSS transition duration'
      },
      {
        property: 'timing',
        type: 'String',
        default: 'var(--quint)',
        description: 'Any valid CSS transition timing'
      },
      {
        property: 'no-slide',
        type: 'Boolean',
        default: 'false',
        description: 'If true, only use opacity to transition'
      },
      {
        property: 'no-bold',
        type: 'Boolean',
        default: 'false',
        description: 'If true, set font-weight to regular'
      }
    ]
  }
}