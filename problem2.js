
const countVowels = (text) =>{
    const vowels = "aeiou";
    c=0;

    for(let i=0; i<text.length; i++){
        if(vowels.includes(text[i].toLowerCase())){
            c++;
        }
    }
    return c;
}


console.log(countVowels("programming"));