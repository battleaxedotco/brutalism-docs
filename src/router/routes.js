export default [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue")
    },
    {
      path: "/Anno",
      name: "Anno",
      component: () => import("@/views/multi/Anno.vue")
    },
    {
      path: "/Button",
      name: "Button",
      component: () => import("@/views/multi/Button.vue")
    },
    {
      path: "/Button-Group",
      name: "Button-Group",
      component: () => import("@/views/multi/Button-Group.vue")
    },
    {
      path: "/Dropdown",
      name: "Dropdown",
      component: () => import("@/views/multi/Dropdown.vue")
    },
    {
      path: "/Dropzone",
      name: "Dropzone",
      component: () => import("@/views/multi/Dropzone.vue")
    },
    {
      path: "/Fold",
      name: "Fold",
      component: () => import("@/views/multi/Fold.vue")
    },
    {
      path: "/Grid",
      name: "Grid",
      component: () => import("@/views/multi/Grid.vue")
    },
    {
      path: "/Icon",
      name: "Icon",
      component: () => import("@/views/multi/Icon.vue")
    },
    {
      path: "/Input",
      name: "Input",
      component: () => import("@/views/multi/Input.vue")
    },
    {
      path: "/Input-Scroll",
      name: "Input-Scroll",
      component: () => import("@/views/multi/Input-Scroll.vue")
    },
    {
      path: "/Menus",
      name: "Menus",
      component: () => import("@/views/multi/Menus.vue")
    },
    {
      path: "/Panel",
      name: "Panel",
      component: () => import("@/views/multi/Panel.vue")
    },
    {
      path: "/Panelify",
      name: "Panelify",
      component: () => import("@/views/multi/Panelify.vue")
    },
    {
      path: "/Row",
      name: "Row",
      component: () => import("@/views/multi/Row.vue")
    },
    {
      path: "/Tabs",
      name: "Tabs",
      component: () => import("@/views/multi/Tabs.vue")
    },
    {
      path: "/TextArea",
      name: "TextArea",
      component: () => import("@/views/multi/TextArea.vue")
    },
    {
      path: "/Toggle",
      name: "Toggle",
      component: () => import("@/views/multi/Toggle.vue")
    }
]