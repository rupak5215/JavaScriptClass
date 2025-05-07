// Version - 1
// function showHello() {
// document.writeln('Hello functions from documents')
// }

// showHello();


//Verson -2
// function addNumbers(){
//     sum = 5 +6; 
//     document.writeln(sum);   
// }
// addNumbers();

//Verson -3
// function addNumbers(num1, num2){
//     sum = num1 + num2; 
//     document.writeln(sum);   
// }
// addNumbers(10, 12);


// let salary = 50000;
// let overtime = 5000;
// addNumbers(salary, overtime);

//Verson -4
// function discounted_price(Cost, dicRate){
//     sum = Cost - (Cost * dicRate)
//     document.writeln(sum);   
// }
// let Product_Price = 20000;
// let discount;
// if (Product_Price>=50000){
//     discount= 0.05;
// } else if (Product_Price>=30000){
//     discount= 0.04;
// } else {
//     discount =0.03;
// }
// discounted_price(Product_Price, discount);



//Verson -5
function discounted_price(cost){
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
}                     
    
    discounted_price(12000);



