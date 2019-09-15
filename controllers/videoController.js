import routes from "../routes"
import Video from "../models/Video"

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({_id:-1});
    res.render('home', { pageTitle:"Home", videos});
  } catch (e) {
    console.error(e);
    res.render('home', { pageTitle:"Home", videos:[]});
  }
}

export const videoDetail = async(req,res) =>{
  try {
    const {id} = req.params;
    const video = await Video.findById(id);
    if(!video) return res.status(404).send("Not Found Video");
    res.render("videoDetail", {pageTitle:video.title, video})
  } catch (e) {
    console.error(e);
    res.redirect(routes.home)
  }

}


export const getUpload = (req,res) =>{
  res.render("upload" ,{pageTitle:"UPLOAD"})
}
export const postUpload = async (req,res) =>{
  const {
    body:{ title, description},
    file:{ path }
  } = req;
  const newVideo = await Video.create({
    fileUrl:path,
    title,
    description
  })
  res.redirect(routes.videoDetail(newVideo.id))
}

export const getEditVideo = async(req, res) => {
  try {
    const {id} = req.params
    const video = await Video.findById(id);
    if(!video) return res.status.send("Not Found Vidoe");
    res.render("editVideo",{pageTitle:`수정하기 ${video.title}`, video})
  } catch (e) {
    console.error(e);
    res.redirect(routes.home)
  }

}
export const postEditVideo = async (req, res) => {
  try {
    const {id} = req.params;
    const {title, description} = req.body
    await Video.findOneAndUpdate({_id:id},{ title, description});
    res.redirect(routes.videoDetail(id));
  } catch (e) {
    console.error(e);
    res.redirect("/")
  }

}


export const search = async (req, res) => {
  let videos = []
  const {term:searchingBy} = req.query;
  const pageTitle = `검색어 : ${searchingBy}`;
  try {
    videos = await Video.find({
      title:{$regex:searchingBy , $options:"i"}
    })
  } catch (e) {
    console.error(e);
  }
  res.render("search", { pageTitle,searchingBy, videos})
}

export const deleteVideo = async (req, res) => {
  try {
    const {id} = req.params;
    await Video.findOneAndRemove({_id:id});
    res.redirect(routes.home);
  } catch (e) {
    console.error(e);
    res.redirect(routes.videoDetail(req.params.id))
  }
}
