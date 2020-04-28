export default [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home.vue")
  },
  {
    path: '/Button',
    name: 'Button',
    component: () => import("@/views/Button.vue")
  },
  {
    path: '/Button-Group',
    name: 'Button-Group',
    component: () => import("@/views/Button-Group.vue")
  }
]
