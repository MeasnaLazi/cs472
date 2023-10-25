let btnLogout, inputSearch, btnSearch, btnAddNew, animeListView, modalAddNew;
let formAddNewOrUpdate, btnSaveOrUpdate, inputId, inputName, selectType, inputSrc, 
inputReleaseDate, fileThumbnail, inputDescription, selectFilterType;
let modalDelete, labelDelete, btnYes;

let listAnime = [];

const Mode = {
    ADD_NEW : "add-new",
    EDIT: "edit",
}
let currentMode;
let deleteAnimeId = undefined;

window.addEventListener("load", () => {
    _initComponent();  
    _initEvent();
    _fetchData();
});

const _initComponent = () => {
    btnLogout = document.getElementById("btnLogout");
    inputSearch = document.getElementById("inputSearch");
    btnSearch = document.getElementById("btnSearch");
    btnAddNew = document.getElementById("btnAddNew");
    animeListView = document.getElementById("animeListView");
    modalAddNew = new bootstrap.Modal(document.getElementById('modalAddNew'), {});
    formAddNewOrUpdate = document.getElementById("formAddNewOrUpdate");
    btnSaveOrUpdate = document.getElementById("btnSaveOrUpdate");
    inputId = document.getElementById("inputId");
    inputName = document.getElementById("inputName");
    selectType = document.getElementById("selectType");
    inputSrc = document.getElementById("inputSrc");
    inputReleaseDate = document.getElementById("inputReleaseDate");
    fileThumbnail = document.getElementById("fileThumbnail");
    inputDescription = document.getElementById("inputDescription");
    selectFilterType = document.getElementById("selectFilterType");
    modalDelete = new bootstrap.Modal(document.getElementById("modalDelete"), {});
    labelDelete = document.getElementById("labelDelete");
    btnYes = document.getElementById("btnYes");
}

const _initEvent = () => {
    btnLogout.addEventListener("click", _onLogoutClick);
    btnAddNew.addEventListener("click", _onAddNewClick);
    btnSaveOrUpdate.addEventListener("click", _onSaveOrUpdateClick);
    btnYes.addEventListener("click", _onYesClick);
    btnSearch.addEventListener("click", _onSearchClick);
}

const _reloadListView = (animes) => {
    animeListView.innerHTML = "";

    for (let anime of animes) {
        _addRowToTable(anime.id, anime.name, anime.type, anime.release_date);
    }
}

const _addRowToTable = function (id, name, type, releaseDate) {
    let row = document.createElement('tr');
    row.setAttribute("id", id);

    for (let e of arguments) {
        let cell = document.createElement('td');
        cell.appendChild(document.createTextNode(e));
        row.appendChild(cell);
    }

    let cell = document.createElement('td');
    cell.appendChild(_createButtonsEachRown(id));
    row.appendChild(cell);

    animeListView.appendChild(row);
}

const _createButtonsEachRown = (rowId) => {
    let buttons = [
        { icon: 'eye', prefixId: 'btnView', onClick: _onViewClick, style: "btn-info" }, 
        { icon: 'pencil', prefixId: 'btnEdit', onClick: _onEditClick, style: "btn-primary" }, 
        { icon: 'trash-o', prefixId: 'btnDelete', onClick: _onDeleteClick, style: "btn-danger" }
    ];

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("list-item-btn-container");

    for (let button of buttons) {
        let btnView = document.createElement("button");
        btnView.classList.add("btn");
        btnView.classList.add(button.style);
        btnView.setAttribute("id", button.prefixId + "_" + rowId);
        btnView.addEventListener("click", button.onClick);

        let icon = document.createElement("i");
        icon.classList.add("fa", "fa-" + button.icon);
        btnView.appendChild(icon);

        if (button.prefixId == "btnEdit") {
            btnView.classList.add("list-item-btn-middle");
        }
        
        buttonContainer.appendChild(btnView);
    }

     return buttonContainer;
} 

const _fillData = (id) => {

    let anime = listAnime.find(a => a.id == id);

    inputId.value = anime.id;
    inputName.value = anime.name;
    selectType.value = anime.type;
    inputSrc.value = anime.src;
    inputReleaseDate.value = anime.release_date;
    inputDescription.value = anime.description;
}

const _onLogoutClick = function() {
    console.log("Logout");
}

const _onAddNewClick = function() {
    currentMode = Mode.ADD_NEW;
    formAddNewOrUpdate.reset();
    inputId.disabled = false;

    modalAddNew.show();
}

const _onViewClick = function() {
    let id = this.id.split("_")[1];
    window.open("detail.html?id=" + id, '_blank').focus();
}

const _onEditClick = function() {
    currentMode = Mode.EDIT;
    formAddNewOrUpdate.reset();
    inputId.disabled = true;

    let id = this.id.split("_")[1];
    _fillData(id);
    modalAddNew.show();
}

const _onDeleteClick = function() {
    let id = this.id.split("_")[1];
    let anime = listAnime.find(a => a.id == id);
    deleteAnimeId = id;

    labelDelete.innerHTML = "";
    labelDelete.appendChild(document.createTextNode("Do you really want to delete '" + anime.name + "' ?"))

    modalDelete.show();
}

const _onYesClick = function() {
    if (deleteAnimeId != undefined) {
        _deleteAnime(deleteAnimeId);
    }
}

const _onSearchClick = function() {
    let keyword = inputSearch.value;
    let type = selectFilterType.value;

    if (keyword || type) {
        _filterAnime(keyword, type);
    } else {
        _reloadListView(listAnime);
    }
}

const _onSaveOrUpdateClick = function() {
    formAddNewOrUpdate.reportValidity();

    if (formAddNewOrUpdate.checkValidity()) {
        let id = inputId.value;
        let name = inputName.value;
        let type = selectType.value;
        let src = inputSrc.value;
        let releaseDate = inputReleaseDate.value;
        let thumbnail = fileThumbnail;
        let description = inputDescription.value;

        if (currentMode == Mode.ADD_NEW) {
            _addNewAnime(id, name, type, src, releaseDate, thumbnail, description);
        } else if (currentMode == Mode.EDIT) {
            _updateAnime(id, name, type, src, releaseDate, thumbnail, description);
        }
    }
}

const _fetchData = async () => {
    let option = {
        method: "GET",
        headers: getHeaders()
    }
    let response = await fetch(api("/anime"), option);
    let jsonResponse = await response.json();

    if (response.ok) {
        listAnime = jsonResponse;
        _reloadListView(listAnime);
    } else { 
        alert(jsonResponse["message"]); 
    };
}

const _addNewAnime = async (id, name, type, src, releaseDate, thumbnail, description) => {

    if (thumbnail.files.length <= 0) {
        alert("Please upload thumbnail!");
        return;
    }

    let formData = new FormData();

    formData.append("id", id);
    formData.append("name", name);
    formData.append("type", type);
    formData.append("src", src);
    formData.append("release_date", releaseDate);
    formData.append("thumbnail", thumbnail.files[0]);
    formData.append("description", description);

    let headers = getHeaders();
    delete headers["Content-Type"];

    let option = {
        method: "POST",
        headers: headers,
        body: formData
    }

    let response = await fetch(api("/anime"), option);
    let jsonResponse = await response.json();

    if (response.ok) {
        listAnime.push(jsonResponse);
        _reloadListView(listAnime);
        formAddNewOrUpdate.reset();
        modalAddNew.hide();
    } else {
        alert(jsonResponse["message"]); 
    }
}

const _updateAnime = async (id, name, type, src, releaseDate, thumbnail, description) => {

    let formData = new FormData();

    formData.append("name", name);
    formData.append("type", type);
    formData.append("src", src);
    formData.append("release_date", releaseDate);
    formData.append("description", description);

    if (thumbnail.files.length > 0) {
        formData.append("thumbnail", thumbnail.files[0]);
    }

    let headers = getHeaders();
    delete headers["Content-Type"];

    let option = {
        method: "PUT",
        headers: headers,
        body: formData
    }

    let response = await fetch(api("/anime/" + id), option);
    let jsonResponse = await response.json();

    if (response.ok) {
        let index = listAnime.findIndex(a => a.id == id);
        listAnime[index] = { ...jsonResponse };

        _reloadListView(listAnime);

        formAddNewOrUpdate.reset();
        modalAddNew.hide();
    } else {
        alert(jsonResponse["message"]); 
    }
}

const _deleteAnime = async (id) => {

    let option = {
        method: "DELETE",
        headers: getHeaders(),
    }

    let response = await fetch(api("/anime/" + id), option);
    let jsonResponse = await response.json();

    if (response.ok) {
        let index = listAnime.findIndex(a => a.id == id);
        listAnime.splice(index, 1);
        _reloadListView(listAnime);
        modalDelete.hide();
    } else {
        alert(jsonResponse["message"]); 
    }
}

const _filterAnime = async (keyword, type) => {
    let option = {
        method: "GET",
        headers: getHeaders()
    }

    let url = api("/anime/filter?keyword=" + keyword);

    if (type != "") {
        url += "&type=" + type;
    }
    
    let response = await fetch(url, option);
    let jsonResponse = await response.json();

    if (response.ok) {
        _reloadListView(jsonResponse);
    } else { 
        alert(jsonResponse["message"]); 
    };
}
