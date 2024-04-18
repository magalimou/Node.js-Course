/*Task 3: Closures and Higher-Order Functions*/

function createCounter()
{
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

function repeatFunction(func, num)
{
    return function(){
        if(num > 0)
        {
            for(let i = 0; i < num; i++)
            {
                func();
            }
        }else{
            while(true)
            {
                func();
            }
        }   
    }
}

/*Testing functions Task 3*/

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

let func = function(){
    console.log("Hello World");
}

let repeatFunc = repeatFunction(func, 3);
repeatFunc();