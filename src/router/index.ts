import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        breadcrumbs: "Домой",
      },
      children: [
        {
          path: '/test1',
          name: 'test1',
          component: () => import(/* webpackChunkName: "test" */ "../views/Placeholder.vue"),
          meta: {
            breadcrumbs: "Тест1",
          },
        },
        {
          path: '/test2',
          name: 'test2',
          component: () => import(/* webpackChunkName: "test" */ "../views/Placeholder.vue"),
          meta: {
            breadcrumbs: "Тест2",
          },
        },
      ]
    },

  ],
})

export default router
