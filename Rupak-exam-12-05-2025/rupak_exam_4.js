const numbers = [3,6,9,12,15];
let multiply = 1;

for (i=0; i<numbers.length; i++){
    multiply*=numbers[i];
}

document.writeln(multiply);