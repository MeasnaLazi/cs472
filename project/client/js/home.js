let gridView;
let listAnime = [];

window.addEventListener("load", () => {
    _initComponent();   
    _fetchDataHome();
});


const _initComponent = () => {
    gridView= document.getElementById("gridView");
}

const _reloadGridView = () => {
    gridView.innerHTML = "";

    for (let anime of listAnime) {
        gridView.appendChild(_createItemView(anime));
    }
}

const _createItemView = (anime) => {
    let div= document.createElement("div");
    div.setAttribute("id", anime.id);
    div.classList.add("col", "mt-2", "anime-list-item");
    
    let img= document.createElement("img");
    img.style.width= '100%';
    img.src= anime.thumbnail;

    let titleH3= document.createElement("h6");
    titleH3.classList.add("mt-2", "pb-2", "anime-name");
    titleH3.appendChild(document.createTextNode(anime.name))

    div.appendChild(img);
    div.appendChild(titleH3);
    
    div.addEventListener("click", _onItemClick);

    return div;
}

const _onItemClick = function() {
    console.log("item click: " + this.id);
    window.location.href = "detail.html?id=" + this.id;
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