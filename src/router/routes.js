export default [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue")
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
      path: "/Input",
      name: "Input",
      component: () => import("@/views/multi/Input.vue")
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
    }
]