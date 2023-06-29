//when we need to add anottations

//when TS has no idea what we return
// function that returns the "any" type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number} = JSON.parse(json);
console.log(coordinates);

// when we declare var on one line and init it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++){
    if (words[i] === 'green'){
        foundWord = true;
    }
}

//variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > 0){
        numberAboveZero = numbers[i];
    }
}
