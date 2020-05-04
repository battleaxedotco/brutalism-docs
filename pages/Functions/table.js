export default {
  evalScript: {
    fields: [
      'param',
      'type',
      'default',
      'description'
    ],
    data: [
      {
        param: 'text',
        type: 'String',
        default: '',
        required: true,
        description: 'JSX text to execute'
      },
      {
        param: 'defs',
        type: 'Any',
        default: '{ }',
        description: 'Mock value to return when in browser'
      },
    ]
  },
  loadScript: {
    fields: [
      'param',
      'type',
      'default',
      'description'
    ],
    data: [
      {
        param: 'path',
        type: 'String',
        default: '',
        required: true,
        description: 'Absolute filepath to script to load'
      },
    ]
  },
  copy: {
    fields: [
      'param',
      'type',
      'default',
      'description'
    ],
    data: [
      {
        param: 'text',
        type: 'String',
        default: '',
        required: true,
        description: 'Text to copy to clipboard'
      }
    ]
  },
  openDialog: {
    fields: [
      'param',
      'type',
      'default',
      'description'
    ],
    data: [
      {
        param: 'title',
        type: 'String',
        default: '',
        required: true,
        description: 'Window title for dialog'
      },
      {
        param: 'isFolder',
        type: 'Boolean',
        default: 'false',
        required: false,
        description: 'Whether to return folders or single files'
      },
    ]
  },

  saveDialog: {
    fields: [
      'param',
      'type',
      'default',
      'required'
    ],
    data: [
      {
        param: 'title',
        type: 'String',
        default: '',
        required: 'true',
      },
      {
        param: 'isFolder',
        type: 'Boolean',
        default: 'false',
        required: 'false'
      },
    ]
  },
  openURL: {
    fields: [
      'param',
      'type',
      'default',
      'required'
    ],
    data: [
      {
        param: 'URL',
        type: 'String',
        default: '',
        required: 'true'
      },
    ]
  },
}