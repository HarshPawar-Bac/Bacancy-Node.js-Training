async function wait(delay){
    let response =await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('status 200 ok')
        }, delay)
    })

    return response
}

console.log(wait(1000).then(data => console.log(data)));
console.log(wait(2000).then((data) => console.log(data)));