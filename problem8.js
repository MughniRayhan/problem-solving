const capitalizeFirstLetter = (sentance) => {
    const words = sentance.split(' ');
    const capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
}

const sentance = "hello world";
console.log(capitalizeFirstLetter(sentance));