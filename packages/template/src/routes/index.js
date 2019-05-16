import BasicLayout from '@/layout/basic'
import LoginLayout from '@/layout/login'

/**
 * 按需加载
 * @type {{path: string, component: App, onEnter: routes.onEnter, childRoutes: *[]}}
 */
/* global routeConstants */
/* global AppUtil */
/* global location */
const routes = [
  {
    path: '/',
    component: BasicLayout,
    childRoutes: [
      {
        path: '/order/detail', // 我的预售订单
        getComponents: (location, callback) => require.ensure([], (require) => {
          callback(null, require('@/views/order/detail').default) // TODO
        }, 'order_detail'),
      }
    ]
  },
  {
    path: '/login',
    component: LoginLayout,
    childRoutes: [
      {
        path: '/order/detail', // 我的预售订单
        getComponents: (location, callback) => require.ensure([], (require) => {
          callback(null, require('@/views/order/detail').default) // TODO
        }, 'order_detail'),
      }
    ]
  },
  ];
export default routes;
