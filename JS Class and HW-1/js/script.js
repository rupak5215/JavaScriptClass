

let price_per_kg = 300;
let quantity = 6;
total = price_per_kg * quantity;
disPrice = total-total*0.10;

console.log(total);
console.log(disPrice);



if (total>=1000) {
    console.log(`Congratulations! you have received 10% discount on your purchase price (Tk.${total}). you are requested to pay the discounted price of Tk.${disPrice}/- only.`);
} else{
    console.log(`Thank you for purchasing products from our shop. You are requested to pay Tk.${total}/- only as product cost.`)
}


// Revised product quantity 

quantity = 3;
total = price_per_kg * quantity;
disPrice = total-total*0.10;

console.log(total);
console.log(disPrice);


if (total>=1000) {
    console.log(`Congratulations! you have received 10% discount on your purchase price (Tk.${total}). you are requested to pay the discounted price of Tk.${disPrice}/- only.`);
} else{
    console.log(`Thank you for purchasing products from our shop. You are requested to pay Tk.${total}/- only as product cost.`)
}


// let year = prompt('Enter the year');
 
// // Leap years are divisible by 400 or by 4 but not 100
// if(year % 4 == 0){
// // if((year % 400 == 0) || ((year % 100 != 0) && (year % 4 == 0))){
//     alert(year + " is a leap year.");
// } else{
//     alert(year + " is not a leap year.");
// }



// let a = 5;
// let b = 7;
// let c = a + b;
// console.log(c);

// let color;
// let mode;
// if (mode === "dark-mode") {
//     color = "black";
// } else {
//     color = "white";
// }
// console.log(color);

// let age = 15;
// if (age <18){
//     console.log ("Junior");
// } else if (age < 60) {
//     console.log ("Adult");
// } else{
//     console.log ("Senior")
// }


// let userName = prompt("Write your name without space:");
// let str = userName;
// console.log(userName);
// console.log("@" + userName + str.length);




function myFunction(firstName){
    console.log(`My name is ${firstName}`);
}

myFunction('Ali');
myFunction('Selim');

function myMath(p1, p2){
    return (p1 * p2)
}

let result = myMath(15, 6);
console.log(result)
document.getElementById('demo').innerText = result;