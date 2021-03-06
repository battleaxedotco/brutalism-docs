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
        property: 'alt',
        type: 'Boolean',
        default: 'false',
        description: 'Displays the color variant for toolbars',
      },
      {
        property: 'vertical',
        type: 'Boolean',
        default: 'false',
        description: 'Aligns toolbar vertically',
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
        property: 'color',
        type: 'String',
        default: 'var(--divider-dark)',
        description: 'CSS value for color',
      },
      {
        property: 'thickness',
        type: 'String',
        default: '2px',
        description: 'Thickness of divider line',
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

    ]
  }
}
