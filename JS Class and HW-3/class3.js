// for loop

// vrsion 1 ------------------------
// for (i=1; i<10; i++){
//     console.log('hello world');
//     document.writeln('hello world');
// }

// vrsion 2-------------------------
// for (i=0; i<=100; i++){
//     console.log(i);
//     document.writeln(i);
// }


// vrsion 3 ------------------------
// let show_end=50;
// for (i=0; i<=show_end; i++){
//     console.log(i);
//     document.writeln(i);
// }

// Loop Break Statement  ------------------------
// let show_end=50;
// for (i=0; i<show_end; i++){
    //     if(i==5){
    //         break;
    //     }
//     console.log(i);
//     document.writeln(i);
// }

// Loop Continue Statement ------------------------
let show_end=10;
for (i=0; i<show_end; i++){
    if(i==5){
        continue;
    }
    console.log(i);
    document.writeln(i);
}

