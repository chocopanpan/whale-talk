let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
  // console.log('i is ' + [i]);
  // console.log(`i is ${i}`);
  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for (let j = 0; j <vowels.length; j++) {
    // console.log('j is ' + [j]);
  // console.log(`j is ${j}`);
  // if (input[i] === vowels[j]) {
  //   console.log(resultArray.push(vowels[j]));
  // }
  if (input[i] === vowels[j]) {
    resultArray.push(vowels[j]);
      }
  }  
}

let resultString = resultArray.join('');
console.log(resultString.toUpperCase());
