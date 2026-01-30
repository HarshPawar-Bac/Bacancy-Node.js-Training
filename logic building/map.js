Array.prototype.myMap = function (callback){
    let temArr = [];
    for(let i=0; i<this.length; i++){
        temArr.push(callback(this[i], i, this));
    }
    return temArr;
}

let age = [2,4,5,6]

console.log(age.myMap((ele, i) => ele + 2))

