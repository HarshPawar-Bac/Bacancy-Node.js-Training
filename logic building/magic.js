let sum = 0;

function magic(param){
    if(typeof param === 'undefined')
        return sum;

    sum+=param;

    return magic;
}

console.log(magic(2)(4)(4)());