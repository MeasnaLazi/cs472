let btnLogout, inputSearch, btnAddNew, animeListView;

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
}

const _initEvent = () => {
    btnLogout.addEventListener("click", _onLogoutClick);
    btnAddNew.addEventListener("click", _onAddNewClick);
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

    // let btnView = document.createElement("button");
    // btnView.classList.add("btn", "btn-primary");
    // // btnView.textContent = "View";
    // btnView.setAttribute("id", "btnView" + id);
    // btnView.addEventListener("click", _onViewClick);

    // let icon = document.createElement("i");
    // icon.classList.add("fa", "fa-car");
    // btnView.appendChild(icon);

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
    console.log("AddNew");
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
