let btn_element = document.getElementById('btn-element');
let birthday_element = document.getElementById('birthday');
let result_element = document.getElementById('result');

function calculateAge(){
    let bdayValue = birthday_element.value;
    if(bdayValue===""){
        alert("Please enter your date of birth");
    } else {
        let age = getAge(bdayValue);
        if (age>1){
            yrs="years";
            result_element.innerHTML = `Your age is ${age} ${yrs} old.`
        } else{
            yr="year";
            result_element.innerHTML = `Your age is ${age} ${yr} old.`
        }
    }
}

function getAge(birthdayValue){
    let currentDate = new Date();
    let birthdayDate = new Date(birthdayValue);
    let age=currentDate.getFullYear() - birthdayDate.getFullYear();
    let month=currentDate.getMonth()- birthdayDate.getMonth();

    if (month<0|| (month===0 && currentDate.getDate()<birthdayDate.getDate()))
        {
            age--;
        }
        return age;
}

btn_element.addEventListener('click', calculateAge);