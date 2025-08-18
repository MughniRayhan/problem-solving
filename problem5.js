const removeDuplicates = (arr) => {
    const uniqueArray = [];
    for( let a of arr) {
        if(!uniqueArray.includes(a)) {
            uniqueArray.push(a);
        }
    }
    return uniqueArray;
}

const arr = [1, 2, 2, 3, 4, 4];
console.log(removeDuplicates(arr));