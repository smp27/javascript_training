// Async - Await
// Async function always returns a promise
// Await can only be used in async function
// await waits till current statement gets completed
// await also consumes the promise

async function asyncPromise() {
    
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(2)
                    }, 1000)
                })
            )
        }, 2000)
    })

    const result = await promise1;

    console.log(result)

    // const result1 = await promise1
    //     .then((res) => {
    //         console.log('res : ', res)
    //         return res * 2; 
    //     })
    //     .catch(err => {
    //         console.log('err : ', err)
    //     })

    //     console.log('result : ', result1)
}

asyncPromise()

