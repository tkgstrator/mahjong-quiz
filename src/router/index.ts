import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import TabsPage from '../views/NavigationView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    children: [
      {
        path: '',
        redirect: '/quiz',
      },
      {
        component: () => import('@/views/QuizView.vue'),
        path: '/quiz',
      },
      {
        component: () => import('@/views/CreateView.vue'),
        path: 'create',
      },
      {
        component: () => import('@/views/ProblemView.vue'),
        path: 'problem',
      },
      {
        component: () => import('@/views/Tab3Page.vue'),
        path: 'settings',
      },
    ],
    component: TabsPage,
    path: '/',
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
