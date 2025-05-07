let shopping_cart = [50, 500, 150, 60];
let total_price = 0;

for (i=0; i<shopping_cart.length; i++){
    total_price += shopping_cart[i];
}

document.writeln(total_price);