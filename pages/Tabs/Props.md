<Tabs :routes='[
  { label: "Route 1", name: "Route 1" },
  { label: "Route 2", name: "Route 2" }
]' />
<Tabs disabled :routes='[
  { label: "Disabled Route 1", name: "Route 1" },
  { label: "Disabled Route 2", name: "Route 2" }
]' />
<Tabs :routes='[
  { label: "Enabled", path: "/" },
  { label: "Disabled", path: "/Route1", disabled: true },
  { label: "Enabled", path: "/Route2" }
]' />
<Tabs flat invert :routes='[
  { label: "Invert Route 1", name: "Route 1" },
  { label: "Invert Route 2", name: "Route 2" }
]' />
<Tabs flat delay="2000ms" :routes='[
  { label: "Delay Route 1", path: "/" },
  { label: "Delay Route 2", path: "/Route2" }
]' />
<Tabs flat duration="1000ms" :routes='[
  { label: "Duration Route 1", path: "/" },
  { label: "Duration Route 2", path: "/Route2" }
]' />
<Tabs flat 
  timing="cubic-bezier(0.9, 0.04, 0.52, 0.96)" 
  :routes='[
    { label: "Timing Route 1", path: "/" },
    { label: "Timing Route 2", path: "/Route2" }
  ]' 
/>
<Tabs emit-to-parent :routes='[
  { label: "Emit Route 1", path: "/" },
  { label: "Emit Route 2", path: "/Route2" }
]' />
<Tabs dummy :routes='[
  { label: "Dummy Route 1", path: "/" },
  { label: "Dummy Route 2", path: "/Route2" }
]' />
