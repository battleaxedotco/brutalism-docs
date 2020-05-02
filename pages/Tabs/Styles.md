<Tabs :routes='[
  { label: "Default Route 1", name: "home" },
  { label: "Default Route 2", name: "about" },
  { label: "Default Route 3", name: "about" }
]' />
<Tabs flat :routes='[
  { label: "Flat Route 1", path: "/" },
  { label: "Flat Route 2", path: "/about" },
  { label: "Flat Route 3", path: "/settings" }
]' />