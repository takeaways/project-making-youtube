import {videos} from '../db';
import routes from "../routes";

export const getJoin = (req, res) => {
  const pageTitle = "Join"
  res.render("join",{pageTitle})
}

export const postJoin = (req, res) => {
  const {name, email, password, password2} = req.body
  if(password !== password2) return res.status(400).send('wrong password');

  res.redirect(routes.home)
}

export const getLogin = (req, res) => {
  const pageTitle = "Login"
  res.render("login",{pageTitle})
}

export const postLogin = (req, res) => {
  const {email, password} = req.body
  res.redirect(routes.home)
}




export const editProfile = (req, res) => {
  const pageTitle = "프로파일 수정"
  res.render("editProfile",{pageTitle})
}






export const logout = (req, res) => {
  res.redirect(routes.home)
}
