import MainPage from '@/pages/MainPage';
import PostsPage from '@/pages/PostsPage';
import AboutApp from '@/pages/AboutApp';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/posts',
    component: PostsPage
  },
  {
    path: '/about',
    component: AboutApp
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;