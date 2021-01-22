import { vovel } from "../db";
export const home = (req, res) => {
    res.render("home", { pageTitle : "홈", vovel});
}

export const search = (req, res) => {
    const {query: { keyword : searchingBy }} = req;
    res.render("search", { pageTitle : "검색", searchingBy: searchingBy})
}
export const videos = (req, res) => res.render("videos", { pageTitle : "보블목록"})

export const upload = (req, res) => res.render("upload", { pageTitle : "업로드"})

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle : "콘텐츠소개"})

export const editVideo = (req, res) => res.render("editVideo", { pageTitle : "보블편집"})

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle : "보블삭제"})