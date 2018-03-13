export default [
  {
    path: '/',
    component: () => import('../view/home/home')
  },
  {
    path: '/unreadmessage',
    component: () => import('../view/home/unreadMessage')
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
