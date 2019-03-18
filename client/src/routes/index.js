import Landing from '@/pages/LandingPage';
import Posts from '@/pages/PostsPage';
import NewPost from '@/pages/NewPostPage';
import EditPost from '@/pages/EditPostPage';
import NewUser from '@/pages/user/NewUserPage';
import Auth from '@/pages/AuthPage';
import Login from '@/pages/LoginPage';

const routes = [
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
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
  {
    path: '/posts/:id',
    name: 'EditPost',
    component: EditPost,
  },
  {
    path: '/users/newUser',
    name: 'NewUser',
    component: NewUser,
  },
];

export default routes;
