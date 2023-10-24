const BASE_URL = "http://localhost:3000";

const api = (path) => {
    return BASE_URL + path;
}

const getHeaders = () => {
    let token = getAuth();
    
    let headers = {
        "Content-Type": 'application/json',
    }
    if (token) {
        headers["Authorization"] = "Bearer " + token;
    }
    
    return  headers;
}