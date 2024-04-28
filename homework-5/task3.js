/*Task 3: Array Shuffling*/

function customShuffle(array) // Fisher-Yates algorithm for shuffling
{
    let result = [...array];
    for(let i = array.length -1; i > 0; i--)
    {
        let randomIndex = Math.floor(Math.random()*(i+1));
        let temp = result[i];
        result[i] = result[randomIndex];
        result[randomIndex] = temp;
    }
    return result;
  
}

let numbers = [1, 2, 3, 4, 5, 6,7];

console.log(customShuffle(numbers));