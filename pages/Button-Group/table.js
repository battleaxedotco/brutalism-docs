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
        property: 'grid',
        type: 'Boolean',
        default: 'false',
        description: 'Transform contents to a CSS grid'
      },
      {
        property: 'exclusive',
        type: 'Boolean',
        default: 'false',
        description: 'Allow only one active item within'
      },
      {
        property: 'multiselect',
        type: 'Boolean',
        default: 'false',
        description: 'Allow an array of active items'
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
        description: 'Text for annotation next group'
      },
      {
        property: 'left',
        type: 'Boolean',
        default: 'true',
        description: 'Align buttons and label to left'
      },
      {
        property: 'center',
        type: 'Boolean',
        default: 'false',
        description: 'Label to left, but container aligned to center'
      },
      {
        property: 'right',
        type: 'Boolean',
        default: 'false',
        description: 'Align buttons and label to right'
      },
      {
        property: 'template',
        type: 'String',
        default: 'repeat([length], 1fr)',
        description: 'Requires grid prop, any grid template value'
      },
      {
        property: 'gap',
        type: 'String',
        default: '4px',
        description: 'Requires grid prop, space between grid items'
      },
      {
        property: 'row',
        type: 'Boolean',
        default: 'true',
        description: 'Align items horizontally'
      },
      {
        property: 'column',
        type: 'Boolean',
        default: 'false',
        description: 'Align items vertically'
      },
      {
        property: 'active',
        type: 'Number | Array',
        default: 'null',
        description: 'Index or indices of active buttons within'
      },
      {
        property: 'label-margin',
        type: 'String',
        default: '12px',
        description: 'Margin between label and first button'
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
        arguments: 'callback( Number | Array )',
        description: 'Returns the current :active prop on click'
      }
    ]
  }
}