<!-- Anywhere inside your project -->
<Menus debug refresh
  :context="[
      {
        label: 'This is a disabled menu item',
        enabled: false
      },
      {
        label: 'Toggle value of this.data.something',
        checkable: true,
        checked: something,
        callback: (item, index, value) => (something = value)
      },
      {
        label: 'This activates a method within this file on clicking this item',
        enabled: true,
        callback: this.localMethod
      }
  ]"
/>