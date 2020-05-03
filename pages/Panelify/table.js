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
        property: 'name',
        type: 'String',
        default: '',
        description: 'Text to appear in panel tab',
      },
      {
        property: 'app',
        type: 'String',
        default: 'ILST',
        description: 'App ID of host application to mock',
      },
      {
        property: 'theme',
        type: 'String',
        default: 'darkest',
        description: 'starlette: darkest, dark, lightest, light or gradient',
      },
      {
        property: 'gradient',
        type: 'Number',
        default: 'null',
        description: 'If AEFT/AUDT/PPRO, 0 - 100 as dark to light',
      },
      {
        property: 'url',
        type: 'String',
        default: '',
        description: 'The URL to a web version of the panel',
      },
      {
        property: 'route',
        type: 'String',
        default: '/',
        description: 'Subroute of the iframe URL',
      },
      {
        property: 'height',
        type: 'String',
        default: '100%',
        description: 'CSS height value for the wrapper',
      },
      {
        property: 'width',
        type: 'String',
        default: '100%',
        description: 'CSS width value for the wrapper',
      },
    ]
  }
}
