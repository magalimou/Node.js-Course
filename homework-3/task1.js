/*Task 1: Immutability and Pure Functions*/
function calculateDiscountedPrice(products, discount)
{
    let discountedProducts = [];
    
    if(discount > 0 && discount <= 100){
        for(p of products){   
            let discountedPrice = p.price - ((p.price * discount) / 100);
            discountedProducts.push({name: p.name, price: discountedPrice});
        }
        
    }else{
        throw new Error("Discount should be between 0 and 100");
    }

    return discountedProducts;
}

function calculateTotalPrice(products)
{
    let totalPrice = 0;
    for(p of products){
        totalPrice = totalPrice + p.price;
    }
    return totalPrice;
}

/*Testing functions task 1*/

let products = [
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 250 },
    { name: 'Product 3', price: 400 }
  ];

let discountedProducts = calculateDiscountedPrice(products, 10);
console.log(discountedProducts);

let totalPrice = calculateTotalPrice(products);
console.log(totalPrice);



