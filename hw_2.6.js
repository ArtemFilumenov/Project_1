//Exercise 1
const number = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < number.length; i++) {
	if (number[i] === 10) break;

	console.log(number[i]);
}

//Exercise 2
const numbers = [1, 5, 4, 10, 0, 3];

console.log(numbers.indexOf(4));

//Exercise 3
const numMassiv = [1, 3, 5, 10, 20];

console.log(numMassiv.join(' '));

//Exercise 4
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i].push(1);
	}
}

console.log(arr);

//Exercise 5
const nums = [1, 1, 1];
nums.push(2, 2, 2);
console.log(nums);

//Exercise 6
const elements = [9, 8, 7, 'a', 6, 5];
elements.sort();
elements.pop();

console.log(elements);

//Exercise 7
const myNum = [9, 8, 7, 6, 5];

let userNum = +prompt('Введите число от 0 до 9');
if (userNum = myNum.includes(userNum)){
	alert('Угадал');
} else {
	alert('Не угадал');
}

//Exercise 8
const letters = 'abcdef';

let lettersSplit = letters.split('');
let lettersReverse = lettersSplit.reverse();
let lettersJoin = lettersReverse.join('');

console.log(lettersJoin);

//Exercise 9
const bigMassiv = [
	[1, 2, 3,],
	[4, 5, 6]
]
console.log(bigMassiv.flat());

//Exercise 10
const numbers1 = [1, 3, 5, 0, 9, 7];
let sum = 0;
numbers1.forEach((element) => {
sum += element;
console.log(sum);
});

//Exercise 11
const perfectSquare = [9, 14, 21];

perfectSquare.map((item) => {
    result = item ** 2;
    console.log(result);
});

//Exercise 12
function stringLength() {
	const getLength = el => el.map(str => str.length);

	console.log(getLength(['space', 'sun', 'quazar']));
}

stringLength();

//Exercise 13
function filterPositive(array) {
	const result = array.filter(num => num < 0);
	console.log(result);
}

filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);

//Exercise 14
	//const randomNum = Math.random(i =  0, i < 10, i++);
	//const evenNumbers = randomNum.filter(el => (el * 10 % 2) == 0);
	//console.log(evenNumbers);
	//console.log(randomNum * 10);

//Exercise 15


