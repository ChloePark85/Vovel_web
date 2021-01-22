export const join = (req, res) => res.render("join", { pageTitle: "회원가입"});
export const login = (req, res) => res.render("login", { pageTitle: "로그인"});
export const logout = (req, res) => res.render("logout", { pageTitle: "로그아웃"});
export const users = (req, res) => res.render("users", { pageTitle: "사용자"});
export const userDetail = (req, res) => res.render("user Detail", { pageTitle: "마이페이지"});
export const editProfile = (req, res) => res.render("edit Profile", { pageTitle: "프로필편집"});
export const changePassword = (req, res) => res.render("change Password", { pageTitle: "비밀번호변경"});