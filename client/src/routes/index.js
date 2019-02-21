import Start from '@/components/pages/StartPage';
import Posts from '@/components/pages/PostsPage';
import NewPost from '@/components/pages/NewPostPage';

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start,
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
  },
  {
    path: '/posts/new',
    name: 'NewPost',
    component: NewPost,
  },
];

export default routes;
