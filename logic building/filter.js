Array.prototype.myFilter = function (callback){
    let temArr = [];
    for(let i=0; i<this.length; i++){
        if(callback(this[i], i, this)){
            temArr.push(this[i]);
        }
    }

    return temArr;
}

let age = [12, 23, 15, 89];

console.log(age.myFilter((ele) => ele >= 18))