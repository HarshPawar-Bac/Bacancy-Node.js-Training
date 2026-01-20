function flattenArray(arr) {
  // your code
 let flatArr = [];

 for(let item of arr){
    if(Array.isArray(item)){
        flatArr.push(...flattenArray(item))
    } else {    
        flatArr.push(item);
    }
 }

 return flatArr;

}


console.log(flattenArray([1, [2, [3, 4]], 5]) )// [1, 2, 3, 4, 5]

console.log(flattenArray([1, [], [2, [3, [4]]]]) )// [1, 2, 3, 4]

console.log([1,2,...[23,5,6]]);
