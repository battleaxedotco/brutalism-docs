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
        property: 'column',
        type: 'Boolean',
        default: 'false',
        description: 'If true distribute content vertically',
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
        property: 'template',
        type: 'String',
        default: 'repeat(#slots, 1fr)',
        description: 'CSS grid-[direction]-template value',
      },
      {
        property: 'gap',
        type: 'String',
        default: '4px',
        description: 'Space between grid items',
      },
      {
        property: 'height',
        type: 'String',
        default: '100%',
        description: 'Height of the grid container',
      },
      {
        property: 'grid',
        type: 'String',
        default: '',
        description: 'CSS grid shorthand attribute',
        todo: true
      },
      {
        property: 'grid-area',
        type: 'String',
        default: '',
        description: 'CSS grid-area shorthand',
        todo: true
      },
      {
        property: 'grid-template',
        type: 'String',
        default: '',
        description: 'CSS grid-template value',
        todo: true
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
        event: '@',
        arguments: 'callback( )',
        description: 'Fires on element dragover event'
      },
    ]
  }
}
