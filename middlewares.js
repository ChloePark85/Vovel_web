import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'Vovel Radio';
    res.locals.routes = routes;
    next();
}