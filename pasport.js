// script.js

function modifyData() {
    // Изменение данных через prompt
    const passportissued = prompt("Введите кем выдан:", document.getElementById("passport-issued").innerText);
    const dateissue = prompt("Введите дату выдачи:", document.getElementById("date-issue").innerText);
    const departmentcode = prompt("Введите код подразделения:", document.getElementById("department-code").innerText);
    const gender = prompt("Введите пол(МУЖ, ЖЕН):", document.getElementById("gender").innerText);
    const placebirth = prompt("Введите место рождения:", document.getElementById("place-birth").innerText);
    const seriesnumber = prompt("Введите серию и номер:", document.getElementById("series-number").innerText);


    if (passportissued) document.getElementById("passport-issued").innerText = passportissued;
    if (dateissue) document.getElementById("date-issue").innerText = dateissue;
    if (departmentcode) document.getElementById("department-code").innerText = departmentcode;
    if (gender) document.getElementById("gender").innerText = gender;
    if (placebirth) document.getElementById("place-birth").innerText = placebirth;
    if (seriesnumber) document.getElementById("series-number").innerText = seriesnumber;
}


const translations = {
    "Иванов": "Ivanov",
    "Иван": "Ivan",
    "Ivanov": "Иванов",
    "Ivan": "Иван"
};

function translateData() {
    
    const lastNameElement = document.getElementById("last-name");
    const firstNameElement = document.getElementById("first-name");

    // Переводим фамилию
    const lastName = lastNameElement.innerText;
    if (lastName == "Иванов") { lastNameElement.innerText = "Ivanov" } else { lastNameElement.innerText = "Иванов" };
    
    

    // Переводим имя
    const firstName = firstNameElement.innerText;
    if (firstName == "Иван") {firstNameElement.innerText = "Ivan" } else { firstNameElement.innerText = "Иван" };

}


function openPage() {
    window.location.href = 'dom.html';
}