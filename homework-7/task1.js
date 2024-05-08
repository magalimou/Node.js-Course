function promiseAll(promises)
{
    return new Promise((resolve, reject) => {
        let results = [];
        let counter = 0;
        if(promises.length === 0)
        {
            resolve(results);
        }
        promises.forEach((promise, index) => {
            promise.then(result => {
                results[index] = result;
                counter++;
                if (counter === promises.length) {
                    resolve(results);
                }
            }).catch(reject);
        });
    });
}

const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ];
  
  promiseAll(promises)
    .then(results => {
      console.log("All promises resolved:", results); // Expected: [1, 2, 3]
    })
    .catch(error => {
      console.error("At least one promise rejected:", error);
    });

