<Tabs invert dummy :routes='[
  { label: "Home", name: "home" },
  { label: "About", name: "about" }
]' />
<Tabs delay="200ms" dummy :routes='[
  { label: "Home", path: "/" },
  { label: "About", path: "/about" }
]' />
<Tabs duration="1000ms" dummy :routes='[
  { label: "Home", path: "/" },
  { label: "About", path: "/about" }
]' />
<Tabs 
  timing="cubic-bezier(0.48, 0.04, 0.52, 0.96)" 
  dummy 
  :routes='[
    { label: "Home", path: "/" },
    { label: "About", path: "/about" }
  ]' 
/>
<Tabs emit-to-parent dummy :routes='[
  { label: "Home", path: "/" },
  { label: "About", path: "/about" }
]' />
