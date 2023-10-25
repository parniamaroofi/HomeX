import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      component: () => import('@/containers/DefaultContainer.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/views/HomePage.vue'),
        },
        {
          path: '/post/:id',
          component: () => import('@/views/PostId.vue'),
        },
      ],
    },
  ],
});
