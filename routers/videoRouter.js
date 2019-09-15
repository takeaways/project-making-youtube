import express from "express";
import routes from "../routes"

import {
  videoDetail,
  getUpload, postUpload,
  getEditVideo, postEditVideo,
  deleteVideo
} from '../controllers/videoController';

import {uploadVideo} from "../middlewares"

const router  = express.Router();


router.get(routes.upload, getUpload);
router.post(routes.upload, uploadVideo, postUpload);

router.get(routes.videoDetail(), videoDetail);

router.get(routes.editVideo(), getEditVideo);
router.post(routes.editVideo(), postEditVideo);

router.get(routes.deleteVideo(), deleteVideo)

export default router;
