// правила в роутерe

import VueRouter from 'vue-router'
import blog from './blog'
 /**
         * Когда проект большой, роуты лучше выносить в отдельные файлы
         * Распределенные по модулям приложения
         * В данном случае это излишне и это просто демонстрация
         */


export default [
    {
        path: '/cat-:category_id',
        name: 'Category',
        component: () => import('@/pages/Category.vue'),
    },
    {
        path: '/post-:post_id',
        name: 'Article',
        component: () => import('@/pages/Article.vue'),
    },
];