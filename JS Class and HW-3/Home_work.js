//------------------------------------------------------------------------------------------
// Home Work - 01
// Preview the number from 01 to 10 where 3, 5, 7 is Lucky Number.
//------------------------------------------------------------------------------------------

// for (i=1; i<=10; i++){
//     if(i==3){
//         document.writeln(`3 is Lucky Number`);
//         document.writeln ('<br>')
//     } else if (i==5) {
//         document.writeln(`5 is Lucky Number`);
//         document.writeln ('<br>')
//     } else if (i==7) {
//         document.writeln(`7 is Lucky Number`);
//         document.writeln ('<br>')
//     } else {
//         document.writeln(`Number ${i}`);
//         document.writeln ('<br>')
//     }
// }



//------------------------------------------------------------------------------------------
// Home Work - 02
// The array number are 5, 10, 15, 20, 55, 45. 
// Add the numbers.
//------------------------------------------------------------------------------------------

// let numbers = [5, 10, 15, 20, 55, 45];

// for (i in numbers) {
//     document.writeln(`Total of Numbers = ${numbers[0] + numbers[1]+ numbers[2]+ numbers[3]+ numbers[4]+ numbers[5]}.`);
//     document.writeln ('<br>')
// }


const numbers = [5, 10, 15, 20, 55, 45];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

document.writeln(`Total of Numbers = ${sum}`); // Output will be 150