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

/*Task 2: Function Composition and Point-Free Style*/
function getFullName(user)
{
    return user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1).toLowerCase() +
     " " + user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1).toLowerCase();
}  

function filterUniqueWords(text)
{
    let words = text.split(" ");
    let uniqueWordsSet = new Set(words);
    let uniqueWordsArray = Array.from(uniqueWordsSet);
    return uniqueWordsArray.sort();
}

function getAverageGrade(studentsArray)
{
    let totalGrades = studentsArray.reduce((acc, student) => acc + student.grades.reduce((acc, grade) => acc + grade, 0), 0);
    let totalStudents = studentsArray.length;
    let averageGrade = totalGrades / totalStudents;
    return averageGrade;
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

/*Testing functions task 2*/

let user = { firstname: 'sam', lastname: 'smith' };
console.log(getFullName(user));

let text = "hello world hello again world again world";
console.log(filterUniqueWords(text));

let students = [
    { name: 'Juan', grades: [90, 85, 95] },
    { name: 'María', grades: [80, 75, 85] },
    { name: 'Carlos', grades: [95, 90, 100] }
  ];
console.log(getAverageGrade(students));

