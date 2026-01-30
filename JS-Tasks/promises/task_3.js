/**
 * Task 3: 
 * Delayed Promise Create a Promise that resolves with "Done" after 1 second.
 */


function fn(delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done')
        }, delay * 1000)
    })
}

fn(1).then(data => console.log(data));
fn(2).then(data => console.log(data));


