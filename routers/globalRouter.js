import express from 'express';
import routes from "../routes"
import {
  home,
  search
} from '../controllers/videoController';
import {
  getJoin,postJoin,
  getLogin,postLogin,
  logout,
} from '../controllers/userController';
const router = express.Router();

router.get(routes.home, home);

router.get(routes.join, getJoin);
router.post(routes.join, postJoin);

router.get(routes.login, getLogin);
router.post(routes.login, postLogin);

router.get(routes.logout, logout);
router.get(routes.search, search);


export default router;
