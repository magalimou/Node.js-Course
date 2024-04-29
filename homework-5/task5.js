/*Task 5: Array Performance Analysis*/

function measureArrayPerformance(func, array){
    let start = performance.now();
    func(array);
    let finish = performance.now();
    return finish - start;
}

function customFilter(array, condition){ 
  
    let result = [];
    for(let i = 0; i < array.length; i++)
    {
        if(condition(array[i]))
        {
            result.push(array[i]);
        }
    }
    return result;
}

function customMap(array, func){
    let result = [];
    for(let i = 0; i < array.length; i++)
    {
        result.push(func(array[i]));
    }
    return result;
}

let names1 = ["John", "Alice", "Bob", "Mary"];
let func = array => console.log(array);
console.log(measureArrayPerformance(func, names1));

/*Use the measureArrayPerformance function to compare the performance of built-in array methods (map, filter, reduce, etc.) against your custom array manipulation functions.*/

//filter
let numbers = [1, 2, 3, 4, 5, 6,7];
let condition = a => customFilter(a, number => number >= 5);
console.log(measureArrayPerformance(condition, numbers));

let func2 = array => array.filter(number => number >= 5);
console.log(measureArrayPerformance(func2, numbers));

//map
let func3 = array => array.map(number => number * 2);
console.log(measureArrayPerformance(func3, numbers)); 

let func4 = array => customMap(array, number => number * 2);
console.log(measureArrayPerformance(func4, numbers));


