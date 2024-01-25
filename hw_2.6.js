//Exercise 1
const number = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < number.length; i++) {
	console.log(number[i]);
	if (number[i] === 10) break;
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
let userNum = prompt('Введите число от 0 до 9'); 
if (userNum === null) {    
	alert('Вы отменили ввод'); 
} else {
	if (!userNum.trim()) {
		alert('Строка пустая или состоит только из пробелов') 
	} else {
		let guessNumber = +userNum; 
		if (isNaN(guessNumber)) {
			alert('Вы ввели не число');
		} else { 
			  if (myNum.includes(guessNumber)) {
				alert('Угадал'); 
			  } else {
				alert('Не угадал'); 
			  }
		} 
	}
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
function coupleSum(arr) {
	let result = [];
	for (let i = 1; i < arr.length; i++) {
		result.push(arr[i] + arr[i - 1]);
	}
	console.log(result);
}
coupleSum([1, 3, 5, 0, 9, 7]);

//Exercise 11
function getSquare(arr) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(arr[i] ** 2);
	}
	return result;
}

console.log(getSquare([9, 14, 21]));

//Exercise 12
function stringLength(arr) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(arr[i].length);
	}
	console.log(result);
}
stringLength(['space', 'sun', 'quazar']);

//Exercise 13
function filterPositive(array) {
	const result = [];
	result.push(array.filter(num => num < 0));
	console.log(result);
}

filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);

// // //Exercise 14


// // //Exercise 15



