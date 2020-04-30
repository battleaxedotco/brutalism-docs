<Tabs 
  dummy 
  @update="msg"
  @click="msg"
  :routes='[
    { label: "Home", path: "/" },
    { label: "About", path: "/about" }
  ]' 
/>