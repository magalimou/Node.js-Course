/*Task 4: Array Intersection and Union*/

function getArrayIntersection(array1, array2)
{
    let result = [];
    let length = (array1.length > array2.length ? array1.length : array2.length);
    for(let i = 0; i < length; i++)
    {
        if(array2.includes(array1[i]))
        {
            result.push(array1[i]);
        }
    }
    return result;
}

let names1 = ["John", "Alice", "Bob", "Mary"];
let names2 = ["John", "Alice", "Bob", "Mary", "David", "Bob"];
console.log(getArrayIntersection(names1, names2));

let numbers1 = [1, 2, 3, 4, 5, 6, 7];
let numbers2 = [8];
console.log(getArrayIntersection(numbers1, numbers2));

function getArrayUnion(array1, array2)
{
    let result = new Set();
    array1.forEach(element => result.add(element));
    array2.forEach(element => result.add(element));
    return result;
}

console.log(getArrayUnion(names1, names2));