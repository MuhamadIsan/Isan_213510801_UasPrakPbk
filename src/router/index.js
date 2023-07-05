import { createRouter, createWebHistory } from 'vue-router';

import Lokasi from '../components/WLokasi.vue';
import Cuaca from '../components/WCuaca.vue';
import Foto from '../components/Wfoto.vue';
import Game from '../components/WGame.vue';

const routes = [
  { path: '/', component: Foto},
  { path: '/lokasi', component: Lokasi },
  { path: '/game', component: Game},
  { path: '/cuaca', component: Cuaca },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;