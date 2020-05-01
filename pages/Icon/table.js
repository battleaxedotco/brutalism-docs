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
        property: 'name',
        type: 'String',
        default: 'home',
        description: 'The fa-[name] for Font Awesome icon',
        todo: true
      },
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
        property: 'name',
        type: 'String',
        default: 'home',
        description: 'The mdi-[name] for Material Design icon',
        todo: true
      },
      {
        property: 'color',
        type: 'String',
        default: 'var(--default-color)',
        description: 'Valid CSS color value of icon'
      },
      {
        property: 'size',
        type: 'String',
        default: '24px',
        description: 'Size of icon component'
      },
      {
        property: 'url',
        type: 'String',
        default: '',
        description: 'URL to launch on click'
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
        description: 'Fires on all clicks to element'
      }
    ]
  }
}
