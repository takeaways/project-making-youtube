import express from 'express';

import {
  editProfile
} from '../controllers/userController'
import routes from "../routes"
const router = express.Router();

router.get(routes.editProfile, editProfile)


export default router;
