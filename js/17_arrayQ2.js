word = ["school", "game", "piano", "science", "hotel", "mountain"]
newWord = word.filter(value => value.length >= 6);
console.log(newWord);

for(let i=1; i<10; i++){
    for(let j=1; j<10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}
