/*
-------------------------------------------------------
Problem -2
** You assigned some customet type to get the discount.
---Terms & Conditions ;
1. customet type = Gold and 
    a. product purchase 50,000/-  ** he will get 5% discount.
    b. product purchase 30,000/-  ** he will get 4% discount.
    c. product purchase 10,000/-  ** he will get 3% discount.
2. customet type = Silver and
    a. product purchase 50,000/-  ** he will get 4% discount.
    b. product purchase 30,000/-  ** he will get 3% discount.
    c. product purchase 10,000/-  ** he will get 2% discount.
3. customet type = Bronge and
    a. product purchase 50,000/-  ** he will get 3% discount.
    b. product purchase 30,000/-  ** he will get 2% discount.
    c. product purchase 10,000/-  ** he will get 1% discount.
-------------------------------------------------------
*/

let cost = 20000;
let clientType = "Silver";
if (clientType == "Gold" && cost>=50000){
    disPercentage = 0.05;
    discount = cost * disPercentage;
    disPrice = cost - discount;
    console.log(`As a ${clientType} Client, you have received 5% discount (${discount}Taka) on your purchase price of ${cost}Taka. Please pay the discounted price of ${disPrice}Taka.`);
} else if(clientType == "Gold" && cost>=30000){
    disPercentage = 0.04;
    discount = cost * disPercentage;
    disPrice = cost - discount;
    console.log(`As a ${clientType} Client, you have received 4% discount (${discount}Taka) on your purchase price of ${cost}Taka. Please pay the discounted price of ${disPrice}Taka.`);
} else if(clientType == "Gold" && cost>=10000){
    disPercentage = 0.03;
    discount = cost * disPercentage;
    disPrice = cost - discount;
    console.log(`As a ${clientType} Client, you have received 3% discount (${discount}Taka) on your purchase price of ${cost}Taka. Please pay the discounted price of ${disPrice}Taka.`);
} else if (clientType == "Silver" && cost>=50000){
    disPercentage = 0.04,
    discount = cost * disPercentage,
    disPrice = cost - discount,
    console.log(`As a ${clientType} Client, you have received 4% discount (${discount}Taka) on your purchase price of ${cost}Taka. Please pay the discounted price of ${disPrice}Taka.`);
} else if (clientType == "Silver" && cost>=30000){
    disPercentage = 0.03,
    discount = cost * disPercentage,
    disPrice = cost - discount,
    console.log(`As a ${clientType} Client, you have received 3% discount (${discount}Taka) on your purchase price of ${cost}Taka. Please pay the discounted price of ${disPrice}Taka.`);
} else if (clientType == "Silver" && cost>=10000){
    disPercentage = 0.02,
    discount = cost * disPercentage,
    disPrice = cost - discount,
    console.log(`As a ${clientType} Client, you have received 2% discount (${discount}Taka) on your purchase price of ${cost}Taka. Please pay the discounted price of ${disPrice}Taka.`);
} else if (clientType == "Bronge" && cost>=50000){
    disPercentage = 0.03,
    discount = cost * disPercentage,
    disPrice = cost - discount,
    console.log(`As a ${clientType} Client, you have received 3% discount (${discount}Taka) on your purchase price of ${cost}Taka. Please pay the discounted price of ${disPrice}Taka.`);
} else if (clientType == "Bronge" && cost>=30000){
    disPercentage = 0.02,
    discount = cost * disPercentage,
    disPrice = cost - discount,
    console.log(`As a ${clientType} Client, you have received 2% discount (${discount}Taka) on your purchase price of ${cost}Taka. Please pay the discounted price of ${disPrice}Taka.`);
} else if (clientType == "Bronge" && cost>=10000){
    disPercentage = 0.01,
    discount = cost * disPercentage,
    disPrice = cost - discount,
    console.log(`As a ${clientType} Client, you have received 1% discount (${discount}Taka) on your purchase price of ${cost}Taka. Please pay the discounted price of ${disPrice}Taka.`);
} else{
    console.log(`You do not getting any discount as you are not our regular client. Please pay the product price of ${cost}taka.` )
}