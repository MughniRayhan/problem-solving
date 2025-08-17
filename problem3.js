const readline = require('readline');

const isPalindrome = (text) =>{
    const reversed = text.split("").reverse().join("");
    return text === reversed;

}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter a string: ", (userInput) => {
    console.log(isPalindrome(userInput));
    rl.close();
});