const KEY = "AnimeNOWToken";

const isAuth = () => {
    let token = window.localStorage.getItem(KEY);
    return token != null;
}

const setAuth = (token) => {
    window.localStorage.setItem(KEY, token);
}

const removeAuth = (token) => {
    window.localStorage.removeItem(KEY);
}