let value = 0;
for (i = 0; i<5; i++) {
let number = Math.floor(Math.random() * 100);
 value += number;
 console.log(number);
}
let average = value/5;
console.log("The sum of  5 Random 2 Digit values is : "+ value);
console.log("The average of  5 Random 2 Digit values is : "+ average);