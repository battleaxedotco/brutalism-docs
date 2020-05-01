<Tabs :routes='[
  { label: "Default Route 1", name: "home" },
  { label: "Default Route 2", name: "about" },
  { label: "Default Route 3", name: "about" }
]' />
<Tabs filled :routes='[
  { label: "Filled Route 1", path: "/" },
  { label: "Filled Route 2", path: "/about" },
  { label: "Filled Route 3", path: "/settings" }
]' />