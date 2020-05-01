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
        property: 'filled',
        type: 'Boolean',
        default: 'false',
        description: 'No active line animation, adapts to host app UI'
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
        property: 'routes',
        type: 'Array',
        default: '[ ]',
        description: 'Array of items with Router paths/names'
      },
      {
        property: 'disabled',
        type: 'Boolean',
        default: 'false',
        description: 'If true, prevents all mouse events'
      },
      {
        property: 'invert',
        type: 'Boolean',
        default: 'false',
        description: 'If true active line appears above tab'
      },
      {
        property: 'delay',
        type: 'String',
        default: '20ms',
        description: 'Any valid CSS transition delay'
      },
      {
        property: 'duration',
        type: 'String',
        default: '200ms',
        description: 'Any valid CSS transition duration'
      },
      {
        property: 'timing',
        type: 'String',
        default: 'var(--quad)',
        description: 'Any valid CSS transition timing'
      },
      {
        property: 'dummy',
        type: 'Boolean',
        default: 'false',
        description: "If true, does not push new route"
      },
      {
        property: 'emit-to-parent',
        type: 'Boolean',
        default: 'false',
        description: "Sends relative route to parent if in iframe"
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
        event: '@update',
        arguments: 'callback( item )',
        description: 'Returns the new active item after any change'
      }
    ]
  }
}
