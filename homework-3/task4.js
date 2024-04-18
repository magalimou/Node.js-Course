/*Task 4: Recursion and Tail Call Optimization*/

function calculateFactorial(n, accumulator = 1) {
    if (n === 0) {
      return accumulator;
    }
    return calculateFactorial(n - 1, n * accumulator);
  }

function power(base, exponent)
{
    if(exponent === 0)
    {
        return 1;
    }
    return base * power(base, exponent - 1);
}

 /*Testing functions Task 4*/

  console.log(calculateFactorial(4)); 

  console.log(power(2, 3));
  