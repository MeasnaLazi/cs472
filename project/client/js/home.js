let gridView, btnLoginOrAdmin, modalLogin, btnLogin, formLogin, inputUsername, inputPassword;
let listAnime = [];

window.addEventListener("load", () => {
    _initComponent(); 
    _initEvent();  
    _fetchDataHome();
    _checkAuthecation();
});

const _initComponent = () => {
    gridView = document.getElementById("gridView");
    btnLoginOrAdmin = document.getElementById("btnLoginOrAdmin");
    modalLogin = new bootstrap.Modal(document.getElementById('modalLogin'), {});
    btnLogin = document.getElementById("btnLogin");
    formLogin = document.getElementById("formLogin");
    inputUsername = document.getElementById("inputUsername");
    inputPassword = document.getElementById("inputPassword");
}

const _initEvent = () => {
    btnLoginOrAdmin.addEventListener("click", _onLoginOrAdminClick);
    btnLogin.addEventListener("click", _onLoginClick);
}

const _reloadGridView = () => {
    gridView.innerHTML = "";

    for (let anime of listAnime) {
        gridView.appendChild(_createItemView(anime));
    }
}

const _checkAuthecation = () => {
    btnLoginOrAdmin.textContent = isAuth() ? "Admin" : "Login";
}

const _createItemView = (anime) => {
    let div= document.createElement("div");
    div.setAttribute("id", anime.id);
    div.classList.add("col", "mt-2", "anime-list-item");
    
    let img= document.createElement("img");
    img.style.width= '100%';
    img.style.minHeight = "336px";
    img.src= getImageFullPath(anime.thumbnail);

    let titleH3= document.createElement("h6");
    titleH3.classList.add("mt-2", "pb-2", "anime-name");
    titleH3.appendChild(document.createTextNode(anime.name))

    div.appendChild(img);
    div.appendChild(titleH3);
    
    div.addEventListener("click", _onItemClick);

    return div;
}

const _openAdminPage = () => {
    window.location.href = "admin.html";
}

const _onItemClick = function() {
    // console.log("item click: " + this.id);
    window.location.href = "detail.html?id=" + this.id;
}

const _onLoginOrAdminClick = function() {
    if (!isAuth()) {
        modalLogin.show();
    } else {
        _openAdminPage();
    }
}

const _onLoginClick = function() {
    formLogin.reportValidity();

    if (formLogin.checkValidity()){
        let username = inputUsername.value;
        let password = inputPassword.value;

        _login(username, password);
    }
}

const _fetchDataHome = async () => {
    const response = await fetch(api("/home"));

    if (!response.ok) {
        alert("fetch data fail!");
        return;
    }
    listAnime = await response.json();
    _reloadGridView();
}

const _login = async (username, password) => {
    let obj = { username, password };
    let option = {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: getHeaders()
    }
    let response = await fetch(api("/users/login"), option);
    let jsonResponse = await response.json()

    if (response.ok) {
        let token = jsonResponse["token"];
        setAuth(token);
        _checkAuthecation();
        _openAdminPage();
    } else { 
        alert(jsonResponse["message"]); 
    };

    modalLogin.hide();
}