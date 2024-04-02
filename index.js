const btnEl = document.getElementById('btn');
const birthdayEl = document.getElementById('birthday');
const resultEl = document.getElementById('result');

function calculateAge() {
    const birthdayVal = birthdayEl.value;
    if (birthdayVal === ""){
        alert('Please enter your birthday')
    }else {
        const age = getAge(birthdayVal)
        resultEl.innerText = `Your age is ${age} years old`
    }
}

function getAge(birthdayVal){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayVal)
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
        age--;
    }
    alert (`Your age is ${age} years old`);
    return age;
}

btnEl.addEventListener('click',calculateAge)