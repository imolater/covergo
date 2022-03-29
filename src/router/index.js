import Vue from 'vue';
import VueRouter from 'vue-router';
import Page1 from '@/views/Page1';
import Page2 from '@/views/Page2';
import Page2Error from '@/views/Page2Error';
import Page3 from '@/views/Page3';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'page1',
    component: Page1
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page2
  },
  {
    path: '/page2-error',
    name: 'page2-error',
    component: Page2Error
  },
  {
    path: '/page3',
    name: 'page3',
    component: Page3
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
