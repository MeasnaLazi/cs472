let allStudents = [];

window.onload = display;

async function display() {
    let response = await fetch("http://localhost:3000/students");
    let json;
    if (response.ok) {
        json = await response.json();
        allStudents = json;

        for (let e of json) {
            addRowToTable(e.id, e.name, e.program)
        }
        _refreshSelectOption();
    }
    else alert("Error" + response.status);

}

function addRowToTable(id, name, program) {
    let row = document.createElement('tr');
    row.setAttribute("id", id);
    for (let e of arguments) {
        let cell = document.createElement('td');
        cell.appendChild(document.createTextNode(e));
        row.appendChild(cell);
    }
    document.getElementById('tbodyStudentList').appendChild(row);
}

async function addStudent(id, name, program) {
    let obj = { id, name, program };
    let setting = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch("http://localhost:3000/students", setting);
    if (response.ok) {
        addRowToTable(id, name, program);
        allStudents.push(obj);
        _refreshSelectOption();
    } else alert("Error " + response.status);
}

document.getElementById('btnRegister').addEventListener("click", () => {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let program = document.getElementById('program').value;
    addStudent(id, name, program);
    document.getElementById('myform').reset()
});

function removeRowFomTable(id) {
    let rows = document.querySelectorAll(`[id="${id}"]`);
    if (rows.length > 0) {
        document.getElementById('tbodyStudentList').removeChild(rows[0]);
    }
}


async function deleteStudent(id) {
    let setting = {
        method: "DELETE"
    }
    let response = await fetch("http://localhost:3000/students/" + id, setting);
    if (response.ok) {
        let index = allStudents.findIndex(s => s.id == id);
        allStudents.splice(index, 1);
        _refreshSelectOption();
        removeRowFomTable(id);
    } else alert("Error " + response.status);
}

document.getElementById('btnDelete').addEventListener("click", () => {
    let id = document.getElementById('ddlStudent').value;
    deleteStudent(id);
});

const _refreshSelectOption= () => {
    let ddlStudent= document.getElementById('ddlStudent');
    let ddlStudentForUpdate= document.getElementById('ddlStudentForUpdate');

    _refreshOptionBySelect(ddlStudent);
    _refreshOptionBySelect(ddlStudentForUpdate);


};

const _refreshOptionBySelect= (selectBox) => {

    let temStudents= [...allStudents];
    temStudents.unshift({id: 0, name: "No-Select", program: ""});
    selectBox.innerHTML = "";
   
    for (let student of temStudents) {
        var option= document.createElement("option");
        option.text= student.name;
        option.value= student.id;

        selectBox.appendChild(option);
    }
}

document.getElementById('ddlStudentForUpdate').addEventListener("change", () => {
    let id = document.getElementById('ddlStudentForUpdate').value;
    let student = allStudents.find(s => s.id == id)

    if (parseInt(id) > 0) {
        _fillData(student);
    } else {
        document.getElementById('myform').reset()
    }
});

const _fillData = (student) => {
    document.getElementById("idForUpdate").value = student.id;
    document.getElementById("nameForUpdate").value = student.name;
    document.getElementById("programForUpdate").value = student.program;
}

document.getElementById('btnUpdate').addEventListener("click", () => {
    let id = document.getElementById('idForUpdate').value;
    let name = document.getElementById('nameForUpdate').value;
    let program = document.getElementById('programForUpdate').value;
    updateStudent(id, name, program);
    document.getElementById('myform').reset()
});

async function updateStudent(id, name, program) {
    let obj = { id, name, program };
    let setting = {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch("http://localhost:3000/students/" + id, setting);
    if (response.ok) {
        let student = allStudents.find(s => s.id == id);
        student.name = name;
        student.program = program;

        updateRowToTable(student);
        _refreshSelectOption();
    } else alert("Error " + response.status);
}

function updateRowToTable(student) {

    let rows = document.querySelectorAll(`[id="${student.id}"]`);

    if (rows.length > 0) {
        for (let cell of rows[0].cells) {
            cell.innerHTML = "";
        }
        rows[0].cells[0].appendChild(document.createTextNode(student.id));
        rows[0].cells[1].appendChild(document.createTextNode(student.name));
        rows[0].cells[2].appendChild(document.createTextNode(student.program));
    }
}