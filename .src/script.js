const URL = "http://localhost:3000/students";

window.onload = loadStudent();

function renderStudents(studentsList) {
    let templateEl = document.getElementById('studentList');
    let studentElement = templateEl.content.querySelector(".student");
    let studentList = document.getElementById('students');

for( let student of studentsList ){
    let studentClone =  studentElement.cloneNode(true);
    updateStudentElement(studentClone, student);
    studentList.appendChild(studentClone);
 }
}

function updateStudentElement(studentElement, student) {
    studentElement.querySelector('h1').innerText = student.name + ' ' + student.level;
}

function loadStudent() {
    fetch(URL)
        .then(r => r.json())
        .then(renderStudents);
}

function createStudent() {

    let sName = document.getElementById("studentName").value;
    let sLevel = document.getElementById("studentLevel").value;
    console.log(sName,sLevel);
    fetch(URL, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({name : sName, level : sLevel})
        }
        )
    }