let inputPatientIdNumber, inputFirstName, inputMiddleName, inputLastName, inputDateOfBirth;
let selectDepartment;
let radioIsOutPatientYes, radioIsOutPatientNo;
let btnRegisterPatient, btnReset;
let form, table;
let chkElderlyPatients, chkShowOutPatients;

let allPatients = [];
let allRows = [];

window.addEventListener("load", () => {
    console.log("Start Patient JS!");

    _initComponent();
    _initEvent();
    _initDummyData();
});

const _initComponent = () => {
    inputPatientIdNumber = document.getElementById("patientIdNumber");
    inputFirstName = document.getElementById("firstName");
    inputMiddleName = document.getElementById("middleInitials");
    inputLastName = document.getElementById("lastName");
    inputDateOfBirth = document.getElementById("dateOfBirth");
    selectDepartment = document.getElementById("ddlDepartment");
    radioIsOutPatientYes = document.getElementById("radioIsOutPatientYes");
    radioIsOutPatientNo = document.getElementById("radioIsOutPatientNo");
    btnRegisterPatient = document.getElementById("btnRegisterPatient");
    btnReset = document.getElementById("btnReset");
    form = document.getElementById("form");
    table = document.getElementById("table");
    chkElderlyPatients = document.getElementById("chkElderlyPatients");
    chkShowOutPatients = document.getElementById("chkShowOutPatients");
}

const _initEvent = () => {
    btnRegisterPatient.onclick = _onRegisterPatentClicked;

    chkElderlyPatients.addEventListener("change", _onCheckChange);
    chkShowOutPatients.addEventListener("change", _onCheckChange);
}

const _initDummyData = () => {
    let patientsData = [
        {
            id: "EP-001-000001",
            firstName: "Ana",
            middleName: "J",
            lastName: "Smith",
            dob: "1945-01-05",
            department: "Ear, Nose and Throat",
            isOutPatient: false
        },
        {
            id: "EP-001-000002",
            firstName: "Bob",
            middleName: "K",
            lastName: "Jones",
            dob: "1985-03-13",
            department: "Cardiology",
            isOutPatient: true
        },
        {
            id: "EP-001-000003",
            firstName: "Carlos",
            middleName: "A",
            lastName: "Hernandez",
            dob: "1957-03-13",
            department: "Cardiology",
            isOutPatient: true
        }
    ];

    for(let patient of patientsData) {
        _registerPatent(patient);
        _insertToTable(patient);
    }
}

const _onCheckChange = () => {
    let isElderly = chkElderlyPatients.checked;
    let isOutPatient = chkShowOutPatients.checked;

    _filterPatients(isElderly, isOutPatient);
}

const _onRegisterPatentClicked = (event) => {

    event.preventDefault();
    form.reportValidity();

    if (form.checkValidity()) {
        let id = inputPatientIdNumber.value;
        let firstName = inputFirstName.value;
        let middleName = inputMiddleName.value;
        let lastName = inputLastName.value;
        let dob = inputDateOfBirth.value;
        let department = selectDepartment.value;
        let isOutPatient = radioIsOutPatientYes.checked ?? false;

        let newPatient = {
            id: id,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            dob: dob,
            department: department,
            isOutPatient: isOutPatient,
        };

        _registerPatent(newPatient);
        _insertToTable(newPatient);

        btnReset.click();
    }
}

const _registerPatent = (patient) => {
    allPatients.push(patient);
}

const _insertToTable = (patient) => {
    let row = table.insertRow(allPatients.length);
    let cellId = row.insertCell(0);
    let cellFirstName = row.insertCell(1);
    let cellMiddleName = row.insertCell(2);
    let cellLastName = row.insertCell(3);
    let cellDOB = row.insertCell(4);
    let cellDepartment = row.insertCell(5);
    let cellOutPatient = row.insertCell(6);

    let dobDate = _convertStringToDate(patient.dob);

    cellId.innerHTML = patient.id;
    cellFirstName.innerHTML = patient.firstName;
    cellMiddleName.innerHTML = patient.middleName;
    cellLastName.innerHTML = patient.lastName;
    cellDOB.innerHTML = _formatDateShowOnTable(dobDate);
    cellDepartment.innerHTML = patient.department;
    cellOutPatient.innerHTML = patient.isOutPatient ? "Yes" : "No";

    allRows.push(row);
}

const _filterPatients = (isElderly, isOutPatient) => {
    let displayPatients =  allPatients;

    if (isElderly && isOutPatient) {
        displayPatients = allPatients.filter(p => {
            let dobDate = _convertStringToDate(p.dob);
            let age = _getAgeFromDate(dobDate);

            return p.isOutPatient || age >= 65;
        });
    } else if (isElderly) {
        displayPatients = allPatients.filter(p => {
            let dobDate = _convertStringToDate(p.dob);
            let age = _getAgeFromDate(dobDate);

            return age > 65;
        });
    } else if (isOutPatient) {
        displayPatients = allPatients.filter(p => p.isOutPatient);
    }
    
    _showPatientOnTable(displayPatients);
}

const _showPatientOnTable = (patients) => {
    _hideAllRows();

    for (let patient of patients) {
        let showRow = allRows.find(row => row.cells[0].innerText == patient.id);
        showRow.classList.remove("d-none");
    }
}

const _hideAllRows = () => {
    for (let row of allRows) {
        row.classList.add("d-none");
    }
}

const _convertStringToDate = (dateStr) => {
    let [year, month, day] = dateStr.split("-");
    return new Date(year, month, day);
}

const _formatDateShowOnTable = (date) => {

    const mapMonth = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December",
    }

    return `${date.getDate()} ${mapMonth[date.getMonth()]} ${date.getFullYear()}`
}

const _getAgeFromDate = (date) => {
    var today = new Date();
    return today.getFullYear() - date.getFullYear();
}
