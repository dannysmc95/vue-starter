import type { RouteRecordRaw, RouteLocationNormalized } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import MetaGuard from '../setup/guards';

const routes: RouteRecordRaw[] = [

	{
		path: '/',
		name: 'Home',
		meta: {
			title: 'Home | Vue Starter',
		},
		component: () => import('../views/Home/Home.vue'),
	},

	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		meta: {
			title: 'Not Found | Vue Starter',
		},
		component: () => import('../views/_default/NotFound.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to: RouteLocationNormalized) => {
	MetaGuard(to);
});

export default router;
