const evenNumber = (arr) => {
    return arr.filter(num => num % 2 === 0);
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(evenNumber(arr))