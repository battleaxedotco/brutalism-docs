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
        property: '',
        type: '',
        default: '',
        description: '',
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
        property: 'justify',
        type: 'String',
        default: 'flex-start',
        description: 'CSS value of justify-content',
      },
      {
        property: 'align',
        type: 'String',
        default: 'space-around',
        description: 'CSS value of align-items',
      },
      {
        property: 'wrap',
        type: 'String',
        default: 'wrap',
        description: 'CSS flex-wrap value',
      },
    ]
  }
}
