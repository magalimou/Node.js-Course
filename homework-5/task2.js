/*Task 2: Array Chunking*/

function chunkArray(array, size)
{
    let result = [];
    for(let i = 0; i < array.length; i += size)
    {
        result.push(array.slice(i, i + size));
    }
    return result;
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let size = 3;
console.log(chunkArray(a, size)); 