
function sleep(time){
    return new Promise((resolve) => setTimeout(resolve, time))
}

async function asyncLoop(time, start, end){
    for(let i=0; i<=end; i++){
        console.log(i);
        await sleep(time);
    }
}

asyncLoop(1000, 1, 10);