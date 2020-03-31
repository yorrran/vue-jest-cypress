import { RouteConfig } from 'vue-router';

const HelloWorldComponent = () => import('./components/Login.vue');
const ShopComponent = () => import('./components/Shop.vue');

export const routes: RouteConfig[] = [
  {
    path: '/p1',
    name: 'HelloWorldComponent',
    component: HelloWorldComponent,
  },
  {
    path: '/p2',
    name: 'ShopComponent',
    component: ShopComponent,
    meta: {
      auth: true,
    },
  },
];
