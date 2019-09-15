const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

const VIDEOS = "/videos";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";
const UPLOAD = "/upload"

const routes = {
  home:HOME,
  join:JOIN,
  login:LOGIN,
  logout:LOGOUT,
  search:SEARCH,
  users:USERS,
  userDetail:(id) => id !== undefined ? `users/${id}` : USER_DETAIL,
  editProfile:EDIT_PROFILE,
  changePassword:CHANGE_PASSWORD,
  videos:VIDEOS,
  upload:UPLOAD,
  videoDetail:(id) => id !== undefined ? `/videos/${id}` : VIDEO_DETAIL,
  editVideo:(id) => id !== undefined ? `/videos/${id}/edit` :EDIT_VIDEO,
  deleteVideo:(id) => id !== undefined ? `/videos/${id}/delete`: DELETE_VIDEO
}

export default routes;
