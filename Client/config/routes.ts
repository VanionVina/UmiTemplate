export default [
  {
    name: 'Main',
    path: '/',
    component: './login',
  },
  {
    access: 'canUser',
    name: 'App',
    path: '/app',
    component: '@/layouts/AppLayout',
    routes: [
      {
        path: '/app',
        redirect: '/app/index',
      },
      {
        path: '/app/index',
        component: './app/index'
      },
      {
        path: "/app/secret",
        component: './app/secret'
      },
    ]
  }
];