const KEY = "AnimeNOWToken";

const isAuth = () => {
    let token = window.localStorage.getItem(KEY);
    return token != null;
}

const setAuth = (token) => {
    window.localStorage.setItem(KEY, token);
}

const removeAuth = () => {
    window.localStorage.removeItem(KEY);
}

const getAuth = () => {
    return window.localStorage.getItem(KEY);
}