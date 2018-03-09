export default [
  {
    path: '/',
    component: () => import('../view/home/home')
  },
  {
    path: '/payment',
    component: () => import('../view/home/payment')
  },
  {
    path: '/about',
    component: () => import('../view/home/about')
  },
  {
    path: '/newuser',
    component: () => import('../view/home/newuser')
  },
  {
    path: '/api',
    component: () => import('../view/home/api')
  },
  {
    path: 'set',
    component: () => import('../view/home/set')
  },
  {
    path: '/publishtopic',
    component: () => import('../view/home/publishtopic')
  }
]
