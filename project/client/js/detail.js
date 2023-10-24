let relatedListView, youtubePlayerView, thumbnailImageView, titleLabel, typeLabel, releaseDateLabel, descriptionLabel;
let animeDetail = {};
let listAnime = [];

window.addEventListener("load", () => {
    _initComponent();   
    _fetchDetail();
});

const _initComponent = () => {
    relatedListView = document.getElementById("relatedListView");
    youtubePlayerView = document.getElementById("youtubePlayerView");
    thumbnailImageView = document.getElementById("thumbnailImageView");
    titleLabel = document.getElementById("titleLabel");
    typeLabel = document.getElementById("typeLabel");
    releaseDateLabel = document.getElementById("releaseDateLabel");
    descriptionLabel = document.getElementById("descriptionLabel");
}

const _fetchDetail = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const response = await fetch(api("/home/detail/" + id));

    if (!response.ok) {
        alert("fetch data fail!");
        return;
    }
   
    animeDetail = await response.json();
    _setData();
    _fetchDataHome();
}

const _fetchDataHome = async () => {
    const response = await fetch(api("/home/relate/" + animeDetail.id));

    if (!response.ok) {
        alert("fetch data fail!");
        return;
    }
    listAnime = await response.json();
    _reloadListView();
}

const _clearData = () => {
    youtubePlayerView.src = "";
    thumbnailImageView.src = "";
    titleLabel.innerHTML = "";
    typeLabel.innerHTML = "";
    releaseDateLabel.innerHTML = "";
    descriptionLabel.innerHTML = "";
}

const _setData = () => {
    _clearData();

    youtubePlayerView.src = animeDetail.src;
    thumbnailImageView.src = getImageFullPath(animeDetail.thumbnail);
    titleLabel.appendChild(document.createTextNode(animeDetail.name));
    typeLabel.appendChild(document.createTextNode("Type: " + animeDetail.type));
    releaseDateLabel.appendChild(document.createTextNode("Release Date: " + animeDetail.release_date));
    descriptionLabel.appendChild(document.createTextNode(animeDetail.description));
}

const _reloadListView = () => {
    relatedListView.innerHTML = "";

    for (let anime of listAnime) {
        relatedListView.appendChild(_createItemView(anime));
    }
}

const _createItemView = (anime) => {
    let div = document.createElement("div");
    div.setAttribute("id", anime.id);
    div.classList.add("col-12", "mt-2", "related-list-item");
    
    let img = document.createElement("img");
    img.classList.add("related-list-item-img");
    img.style.width = '70px';
    img.src = getImageFullPath(anime.thumbnail);

    let releaseDate= document.createElement("p");
    releaseDate.classList.add("related-list-item-release-date");
    releaseDate.appendChild(document.createTextNode(anime.release_date))

    let title= document.createElement("h6");
    title.classList.add("related-list-item-title");
    title.appendChild(document.createTextNode(anime.name))

    let type= document.createElement("p");
    type.classList.add("related-list-item-type");
    type.appendChild(document.createTextNode(anime.type.toUpperCase()))

    div.appendChild(img);
    div.appendChild(releaseDate);
    div.appendChild(title);
    div.appendChild(type);
    
    div.addEventListener("click", _onItemClick);

    return div;
}

const _onItemClick = function() {
    let findAnime = listAnime.find(a => a.id == this.id);
    if (findAnime) {
        animeDetail = findAnime;
        _setData();
        // _reloadListView();
        _fetchDataHome();
    }
}


