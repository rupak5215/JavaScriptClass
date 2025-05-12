function age(years) {
ageDay= 365*years;
document.writeln(`You are ${ageDay} days old`)
}

yourAge = prompt('Write your age');

age(yourAge);