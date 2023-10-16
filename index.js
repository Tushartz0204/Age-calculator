const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
    const birthdayvalue = birthdayEl.value;
    if (birthdayvalue === "") {
        alert("please enter your birth date !!!");
    } else {
        const age = getAge(birthdayvalue);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayvalue) {
    const currentdate = new Date();
    const birthdate = new Date(birthdayvalue);
    let age = currentdate.getFullYear() - birthdate.getFullYear();
    const month = currentdate.getMonth() - birthdate.getMonth();
    if (month < 0 || (month === 0 && currentdate.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
}
btnEl.addEventListener("click", calculateAge);
