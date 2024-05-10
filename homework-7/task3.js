function chainPromises(functionsArray) {
    return new Promise((resolve, reject) => {
        let result = "";
        let chain = Promise.resolve();
        functionsArray.forEach(asyncFunction => {
            chain = chain.then(data => {
            result = data;
            return asyncFunction(result);
            });
        });
        chain
            .then(data => {
            result = data;
            resolve(result);
            })
            .catch(reject);
        });
}

function asyncFunction1() {
    return Promise.resolve("Result from asyncFunction1");
  }
  
  function asyncFunction2(data) {
    return Promise.resolve(data + " - Result from asyncFunction2");
  }
  
  function asyncFunction3(data) {
    return Promise.resolve(data + " - Result from asyncFunction3");
  }
 
  const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];
  
  chainPromises(functionsArray)
    .then(result => {
      console.log("Chained promise result:", result);
      // Expected: "Result from asyncFunction1 - Result from asyncFunction2 - Result from asyncFunction3"
    })
    .catch(error => {
      console.error("Chained promise error:", error);
    });