import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "회원가입"});
}
export const postJoin = (req, res) => {
    const {
        body: { name, email, password, password2 }
    } = req;
    if(password !== password2){
        res.status(400)
        res.render("join", { pageTitle: "회원가입"});
    } else {
        res.redirect(routes.home)
    }
}

export const getLogin = (req, res) => res.render("login", { pageTitle: "로그인"});
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}


export const logout = (req, res) => {
    res.redirect(routes.home);
}


export const users = (req, res) => res.render("users", { pageTitle: "사용자"});

export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "마이페이지"});
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "프로필편집"});
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "비밀번호변경"});