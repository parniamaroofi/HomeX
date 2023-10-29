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
          meta: {
            navigation: true,
          },
        },
        {
          path: '/post/:id',
          component: () => import('@/views/PostId.vue'),
          meta: {
            navigation: false,
          },
        },
        {
          path: '/chats',
          component: () => import('@/views/Chat/ChatsList.vue'),
          meta: {
            navigation: true,
          },
        },
        {
          path: '/chat/:id',
          component: () => import('@/views/Chat/ChatId.vue'),
          meta: {
            navigation: false,
          },
        },
      ],
    },
  ],
});
