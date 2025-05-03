// let cost = 90000;

// if (cost>=50000) {
//     console.log(`Congratulation! you will get 5% discount. Your discount is Tk.${cost*.05}. After discount you have to pay Tk.${cost - cost *.05}.`);
// } else if(cost>=30000){
//     console.log(`Congratulation! you will get 5% discount. Your discount is Tk.${cost*.03}. After discount you have to pay Tk.${cost - cost *.03}.`)
// } else if(cost>=10000){
//     console.log(`Congratulation! you will get 5% discount. Your discount is Tk.${cost*.01}. After discount you have to pay Tk.${cost - cost *.01}.`);
// } else {
//     console.log(`Sorry! you will not get any discount. You have to pay Tk.${cost}`);
// }

let cost = 80000;
let disRate, discount, netPayment;

if (cost>=50000) {
    disRate = 0.05;
    discount = cost * disRate;
    netPayment = cost - discount;
    console.log(`Congratulation! you will get 5% discount. Your discount is Tk.${discount}. After discount you have to pay Tk.${netPayment}.`);
} else if(cost>=30000){
    disRate = 0.03;
    discount = cost * disRate;
    netPayment = cost - discount;
    console.log(`Congratulation! you will get 5% discount. Your discount is Tk.${discount}. After discount you have to pay Tk.${netPayment}.`);
} else if(cost>=10000){
    disRate = 0.01;
    discount = cost * disRate;
    netPayment = cost - discount;
    console.log(`Congratulation! you will get 5% discount. Your discount is Tk.${discount}. After discount you have to pay Tk.${netPayment}.`);
} else {
    console.log(`Sorry! you will not get any discount. You have to pay Tk.${cost}`);
}

