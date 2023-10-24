let btnLogout, inputSearch, btnAddNew, animeListView, modalAddNew;
let formAddNewOrUpdate, btnSaveOrUpdate, inputId, inputName, selectType, inputSrc, 
inputReleaseDate, fileThumbnail, inputDescription;

let listAnime = [];

window.addEventListener("load", () => {
    _initComponent();  
    _initEvent();
    _fetchData();
});

const _initComponent = () => {
    btnLogout = document.getElementById("btnLogout");
    inputSearch = document.getElementById("inputSearch");
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
}

const _initEvent = () => {
    btnLogout.addEventListener("click", _onLogoutClick);
    btnAddNew.addEventListener("click", _onAddNewClick);
    btnSaveOrUpdate.addEventListener("click", _onSaveOrUpdateClick);
}

const _reloadListView = () => {
    animeListView.innerHTML = "";

    for (let anime of listAnime) {
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

const _onLogoutClick = function() {
    console.log("Logout");
}

const _onAddNewClick = function() {
    modalAddNew.show();
}

const _onViewClick = function() {
    console.log("this.id: " + this.id);
}

const _onEditClick = function() {
    console.log("this.id: " + this.id);
}

const _onDeleteClick = function() {
    console.log("this.id: " + this.id);
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

        _addNewAnime(id, name, type, src, releaseDate, thumbnail, description);

        // console.log(`id: ${id}, name: ${name}, type: ${type}, src: ${src}, releaseDate: ${releaseDate}, thumbnailPath: ${thumbnailPath}, description: ${description}`)
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
        _reloadListView();
    } else { 
        alert(jsonResponse["message"]); 
    };
}

const _addNewAnime = async (id, name, type, src, releaseDate, thumbnail, description) => {

    let formData = new FormData();

    formData.append("id", id);
    formData.append("name", name);
    formData.append("type", type);
    formData.append("src", src);
    formData.append("release_date", releaseDate);
    formData.append("thumbnail", thumbnail.files[0]);
    formData.append("description", description);

    let headers = getHeaders();
    // headers["Content-Type"] = "multipart/form-data";
    delete headers["Content-Type"];

    console.log("headers: " + JSON.stringify(headers));

    let option = {
        method: "POST",
        headers: headers,
        body: formData
    }

    let response = await fetch(api("/anime"), option);
    let jsonResponse = await response.json();

    if (response.ok) {
        listAnime.push(jsonResponse);
        _reloadListView();
        formAddNewOrUpdate.reset();
        modalAddNew.hide();
    } else {
        alert(jsonResponse["message"]); 
    }

}
