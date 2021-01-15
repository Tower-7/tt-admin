import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: '仪表盘',
        meta: { title: '仪表盘', icon: 'dashboard', affix: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  /** when your routing map is too long, you can split it into small modules **/
  {
    path: '/banner',
    component: Layout,
    redirect: '/banner/list',
    name: '轮播图',
    meta: {
      title: '轮播图',
      icon: 'el-icon-s-marketing'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/banner/create'),
        name: '添加轮播图',
        meta: { title: '添加轮播图', icon: 'edit' }
      },
      {
        path: 'edit/:id',
        component: () => import('@/views/banner/edit'),
        name: '编辑轮播图',
        meta: {
          title: '编辑轮播图',
          noCache: true,
          activeMenu: '/banner/list'
        },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/banner/list'),
        name: '轮播图列表',
        meta: { title: '轮播图列表', icon: 'list' }
      }
    ]
  },
  {
    path: '/product',
    component: Layout,
    redirect: '/product/list',
    name: '产品',
    meta: {
      title: '产品',
      icon: 'el-icon-data-board'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/product/create'),
        name: '发布产品',
        meta: { title: '发布产品', icon: 'edit' }
      },
      {
        path: 'edit/:id',
        component: () => import('@/views/product/edit'),
        name: '编辑产品',
        meta: { title: '编辑产品', noCache: true, activeMenu: '/product/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/product/list'),
        name: '产品列表',
        meta: { title: '产品列表', icon: 'list' }
      }
    ]
  },
  {
    path: '/project',
    component: Layout,
    redirect: '/project/list',
    name: '项目',
    meta: {
      title: '项目',
      icon: 'el-icon-data-line'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/project/create'),
        name: '添加项目',
        meta: { title: '添加项目', icon: 'edit' }
      },
      {
        path: 'edit/:id',
        component: () => import('@/views/project/edit'),
        name: '编辑项目',
        meta: {
          title: '编辑项目',
          noCache: true,
          activeMenu: '/project/list'
        },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/project/list'),
        name: '项目列表',
        meta: { title: '项目列表', icon: 'list' }
      }
    ]
  },
  {
    path: '/company',
    component: Layout,
    name: '公司简介',
    meta: {
      title: '公司简介',
      icon: 'el-icon-s-help'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/company/create'),
        name: '公司简介',
        meta: { title: '公司简介', icon: 'el-icon-office-building' }
      }
    ]
  },
  {
    path: '/case',
    component: Layout,
    redirect: '/case/list',
    name: '案例',
    meta: {
      title: '案例',
      icon: 'el-icon-folder-checked'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/case/create'),
        name: '发布案例',
        meta: { title: '发布案例', icon: 'edit' }
      },
      {
        path: 'edit/:id',
        component: () => import('@/views/case/edit'),
        name: '编辑案例',
        meta: {
          title: '编辑案例',
          noCache: true,
          activeMenu: '/case/list'
        },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/case/list'),
        name: '案例列表',
        meta: { title: '案例列表', icon: 'list' }
      }
    ]
  },
  {
    path: '/recommend',
    component: Layout,
    name: '推荐',
    meta: {
      title: '推荐',
      icon: 'el-icon-s-opportunity'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/recommend/create'),
        name: '推荐',
        meta: { title: '推荐', icon: 'el-icon-s-opportunity' }
      }
    ]
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: { title: '401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: '404', noCache: true }
      }
    ]
  },

  {
    path: '/error-log',
    component: Layout,
    children: [
      {
        path: 'log',
        component: () => import('@/views/error-log/index'),
        name: 'ErrorLog',
        meta: { title: 'Error Log', icon: 'bug' }
      }
    ]
  },

  {
    path: '/pdf/download',
    component: () => import('@/views/pdf/download'),
    hidden: true
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
