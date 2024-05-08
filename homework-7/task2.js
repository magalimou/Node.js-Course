function promiseAllSettled(promises){
    return new Promise((resolve, reject) => {
        let results = [];
        let counter = 0;
        if(promises.length === 0)
        {
            resolve(results);
        }
        promises.forEach((promise, index) => {
            promise.then(result => {
                results[index] = {status: 'fulfilled', value: result};
                counter++;
                if (counter === promises.length) {
                    resolve(results);
                }
            }).catch(error => {
                results[index] = {status: 'rejected', reason: error};
                counter++;
                if (counter === promises.length) {
                    resolve(results);
                }
            });
        });
    });
}

const promises = [
    Promise.resolve(1),
    Promise.reject("Error occurred"),
    Promise.resolve(3)
  ];
  
  promiseAllSettled(promises)
    .then(results => {
      console.log("All promises settled:", results);
      // Expected: [{ status: 'fulfilled', value: 1 },
      //            { status: 'rejected', reason: 'Error occurred' },
      //            { status: 'fulfilled', value: 3 }]
    });