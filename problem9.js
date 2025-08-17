
const factorial = (num) => {
   if(num<0){
    return null;
   }
    if(num === 0 || num === 1){
     return 1;
    }

   let f = 1;
   for(let i=1; i<=num; i++){
       f *= i;
   }
   return f;
}

console.log(factorial(5));