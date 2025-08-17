const sumOfArr = (arr) => {
    let sum = 0;
    for(a of arr) {
        sum += a;
    }
    return sum;
}

const arr =  [1, 2, 3, 4]
console.log(sumOfArr(arr))