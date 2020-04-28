export default [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue")
    },
    {
      path: "/Button-Group",
      name: "Button-Group",
      component: () => import("@/views/Button-Group.vue")
    },
    {
      path: "/Button",
      name: "Button",
      component: () => import("@/views/Button.vue")
    },
    {
      path: "/Tooltips",
      name: "Tooltips",
      component: () => import("@/views/Tooltips.vue")
    }
]