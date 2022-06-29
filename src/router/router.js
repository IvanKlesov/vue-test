import MainPage from '@/pages/MainPage';
import PostsPage from '@/pages/PostsPage';
import PostsPageWithStore from '@/pages/PostsPageWithStore';
import PostsPageCompositionAPI from '@/pages/PostsPageCompositionAPI';
import AboutApp from '@/pages/AboutApp';
import PostIdPage from '@/pages/PostIdPage';
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
  },
  {
    path: '/posts/:id',
    component: PostIdPage
  },
  {
    path: '/store',
    component: PostsPageWithStore
  },
  {
    path: '/composition',
    component: PostsPageCompositionAPI
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;