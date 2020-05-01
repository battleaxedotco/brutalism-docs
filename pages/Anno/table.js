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
        property: 'bold',
        type: 'Boolean',
        default: 'false',
        description: 'Sets text to font-weight: 600',
      },
      {
        property: 'italic',
        type: 'Boolean',
        default: 'false',
        description: 'Italicizes content',
      },
      {
        property: 'underline',
        type: 'Boolean',
        default: 'false',
        description: 'Sets text-decoration: underline',
      },
      {
        property: 'overline',
        type: 'Boolean',
        default: 'false',
        description: 'Sets text-decoration: overline',
      },
      {
        property: 'strikethough',
        type: 'Boolean',
        default: 'false',
        description: 'Sets text-decoration: strikethrough',
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
        property: 'text',
        type: 'String',
        default: '',
        description: 'Inner text if not using slot',
        todo: true
      },
      {
        property: 'color',
        type: 'String',
        default: 'var(--default-color)',
        description: 'Valid CSS color value of content'
      },
      {
        property: 'uppercase',
        type: 'Boolean',
        default: 'false',
        description: 'Sets text-transform: uppercase'
      },
      {
        property: 'size',
        type: 'String',
        default: '14px',
        description: 'Font size of content'
      },
      {
        property: 'weight',
        type: 'String',
        default: '500',
        description: 'Font-weight of content'
      },
      {
        property: 'letter-spacing',
        type: 'String',
        default: 'normal',
        description: 'Spacing between each letter'
      },
      {
        property: 'word-spacing',
        type: 'String',
        default: 'normal',
        description: 'Spacing between each word'
      },
      {
        property: 'margin',
        type: 'String',
        default: '0px 0px 1ch 0px',
        description: 'Margin value of component'
      },
      {
        property: 'text-decoration',
        type: 'String',
        default: 'none',
        description: 'Sets text decoration to value'
      },

    ]
  }
}
