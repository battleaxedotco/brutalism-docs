export default {
  properties: {
    fields: [
      'Property',
      'Type',
      'Default',
      'Description'
    ],
    data: [
      {
        property: 'script-path',
        type: 'String | Array',
        default: './src/host/[appName]/host.jsx',
        description: '.JSX, .JS, or .JSFL files/folders to load via $.evalFile'
      },
      {
        property: 'utils',
        type: 'String | Array',
        default: './src/host/universal',
        description: 'Path to folder to preload utility scripts prior to script-path'
      },
      {
        property: 'exclude',
        type: 'String | Array',
        default: '',
        description: 'Any string name or valid regex pattern to exclude from script-path or utils'
      },
      {
        property: 'app',
        type: 'String',
        default: 'ILST',
        description: 'The host app to mock when in a browser context'
      },
      {
        property: 'theme',
        type: 'String',
        default: 'Darkest',
        description: 'The starlette theme if browser, one of: darkest, dark, light, lightest, gradient'
      },
      {
        property: 'gradient',
        type: 'Number',
        default: '0',
        description: 'If browser and theme is gradient, from 0 (darkest) to 100 (lightest)'
      }
    ]
  }
}