<Tabs 
  dummy 
  @click="testClick"
  :routes='[
    { label: "Click Route 1", path: "/" },
    { label: "Click Route 2", path: "/about" }
  ]' 
/>
<Tabs 
  dummy 
  @update="showUpdate"
  :routes='[
    { label: "Update Route 1", path: "/home" },
    { label: "Update Route 2", path: "/about" }
  ]' 
/>