

const pingPongNumbers = (n) => {
    const result = [];
   for(let i = 1; i <= n; i++) {
    if(i%3===0 && i%5===0) {
        result.push("PingPong");
    } 
    else if(i%3 === 0) {
        result.push("Ping");
    } 
    else if(i%5 === 0) {
        result.push("Pong");
    } 
    else {
        result.push(i);
    }
   }
   return result.join(", ");
}

console.log(pingPongNumbers(20));