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
    }
]