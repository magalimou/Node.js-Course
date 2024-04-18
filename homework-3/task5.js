/*Task 5: Lazy Evaluation and Generators*/

function lazyMap(array, mapFunc)
{
    let index = 0;
    return {
        next: function(){
            if(index < array.length)
            {
                let result = mapFunc(array[index++]);
                return {value: result, done: false};
            }else{
                return {done: true};
            }
        }
    }
}

function fibonacciGenerator() {
    let currentNum = 0;
    let next = 1;
  
    return {
      next: function() {
        const result = currentNum;
        currentNum = next;
        next = result + currentNum;
        return { value: result, done: false };
      }
    };
  }

/*Testing functions Task 5*/

let numbers = [1, 2, 3, 4, 5];
let squaredNumbersIterator = lazyMap(numbers, num => num * num);
console.log(squaredNumbersIterator.next().value);
console.log(squaredNumbersIterator.next().value);
console.log(squaredNumbersIterator.next().value);

let fibonacci = fibonacciGenerator();
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);