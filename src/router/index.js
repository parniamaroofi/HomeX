import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/containers/DefaultContainer.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/views/Home.vue'),
        },
      ],
    },
  ],
});
