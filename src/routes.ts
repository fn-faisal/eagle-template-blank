import HomeController from './screens/HomeScreen/HomeController';
import AuthController from './screens/AuthScreen/AuthController';

export default [
  {
    path: '/',
    controller: HomeController,
  },
  {
    path: '/auth',
    controller: AuthController,
  },
];
