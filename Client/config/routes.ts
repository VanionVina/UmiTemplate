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
        path: '/app/chat',
        component: './app/chat'
      },
      {
        path: '/app/notification',
        component: './app/notification'
      },
      {
        path: '/app/profile',
        component: './app/profile'
      },
      {
        path: '/app/login',
        component: './app/login'
      },
      {
        path: "/app/secret",
        component: './app/secret'
      },
    ]
  }
];