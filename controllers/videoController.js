import routes from "../routes";
import Video from "../models/Video";


export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle : "홈", videos});
  } catch (error) {
    console.log(error)
    res.render("home", { pageTitle : "홈", videos: []});
  }
}

export const search = (req, res) => {
    const {query: { keyword : searchingBy }} = req;
    res.render("search", { pageTitle : "검색", searchingBy: searchingBy, videos})
}

export const getUpload = (req, res) => res.render("upload", { pageTitle : "업로드"})

export const postUpload = async (req, res) => {
    const { 
      body : { title, description },
      file: { path}
  } = req;
    const newVideo = await Video.create({
      fileUrl: path,
      title,
      description
    })
    console.log(newVideo)
    res.redirect(routes.videoDetail(newVideo.id));
  };  

export const videoDetail = async (req, res) => {
  const {
    params: {id}
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle : "콘텐츠소개", video})
  } catch(error) {
    console.log(error)
    res.redirect(routes.home)
  }
  
}

export const getEditVideo = async (req, res) => {
  const {
    params: {id}
  } = req;
  try{
    const video = await Video.findById(id);
    res.render("editVideo", {pageTitle: `${video.title} 편집`, video})
  } catch(error){
    res.redirect(routes.home);
  }
}

export const postEditVideo = async (req, res) => {
  const {
    params: {id},
    body: {title, description}
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, {title, description})
    res.redirect(routes.videoDetail(id))
  } catch(error){
    res.redirect(routes.home)
  }
}

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle : "보블삭제"})