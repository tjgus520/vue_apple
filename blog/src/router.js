import { createWebHistory, createRouter } from 'vue-router';
import blogList from './components/blogList.vue';
import introdusMain from './components/introduceMain.vue';
import detail from './components/blogDetail.vue';

const routes = [
    {
        path: '/list',
        component: blogList,
    },
    {
        path: '/introdusMain',
        component: introdusMain,
    },
    {
        path: '/detail/:id',
        component: detail,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
