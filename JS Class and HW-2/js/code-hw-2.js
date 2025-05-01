/*
-------------------------------------------------------
Problem
** You assigned some customet type to get the discount.
---Terms * Condition ;
1. customet type = Gold and he will get 5% discount for 50,000/-
2. customet type = Silver and he will get 3% discount for 30,000/-
3. customet type = Bronge and he will get 1% discount for 10,000/-
-------------------------------------------------------
*/

        
let cost = 10000;
let clientType = "Silver";


if (clientType == "Gold" && cost>=50000){
        disPercentage = 0.05;
        discount = cost * disPercentage;
        disPrice = cost - discount;
        console.log(`As a ${clientType} Client, you have received 5% discount (${discount}Taka) on your purchase price of ${cost}Taka. Please pay the discounted price of ${disPrice}Taka.`);
} else if (clientType == "Silver" && cost>=30000){
        disPercentage = 0.03,
        discount = cost * disPercentage,
        disPrice = cost - discount,
        console.log(`As a ${clientType} Client, you have received 3% discount (${discount}Taka) on your purchase price of ${cost}Taka. Please pay the discounted price of ${disPrice}Taka.`);
}
else if (clientType == "Bronge" && cost>=10000){
        disPercentage = 0.01,
        discount = cost * disPercentage,
        disPrice = cost - discount,
        console.log(`As a ${clientType} Client, you have received 1% discount (${discount}Taka) on your purchase price of ${cost}Taka. Please pay the discounted price of ${disPrice}Taka.`);
} else{
        console.log(`You do not getting any discount as you are not our regular client. Please pay the product price of ${cost}taka.` )
}