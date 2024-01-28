//Exercise 1
let str = 'js';
console.log(str.toUpperCase());


//Exercise 2
function searchStart(arr, str) {
    return arr.filter(el => el.toLowerCase().startsWith(str.toLowerCase()));
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); 
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); 
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

//Exercise 3
let math =  32.58884;
console.log(Math.floor(math));
console.log(Math.ceil(math));
console.log(Math.round(math));

//Exercise 4


//Exercise 5
function randomNum() {
    const result = Math.round(Math.random() * 9 + 1);
    return result;
}

console.log(randomNum());

//Exercise 6
function getRandomArrNumbers(num) {
   const result = [];
   for (let i = 0; i < Math.floor(num / 2); i++) {
    result.push(Math.round(Math.random() * num));
   } 
   return result;
}

console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

//Exercise 7
function getRandomNum(minValue, maxValue) {
  return Math.round(Math.random() * (maxValue - minValue) + minValue);  
}

console.log(getRandomNum(3, 8));

//Exercise 8
let currentDates = new Date();
console.log(currentDates);

//Exercise 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(new Date(currentDate));

//Exercise 10
function getDate() {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    let myDate = new Date();
    let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это" + " " + days[myDate.getDay()] + "\nВремя: " + new Date().toLocaleTimeString();

    return fullDate;
}

console.log(getDate());

// // //Exercise 11
// function rememberWords() {
//     let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
//     let fruit = fruits.sort(() => Math.random() - 0.5);
//     alert(fruit.join(' '));
    
//     let oneQuestion = prompt('Чему равнялся первый элемент массива?');
    
//     if (oneQuestion === null) {    
//         alert ('Вы отменили ввод');
//         return;
//     }
     
//     let twoQuestion = prompt('Чему равнялся последний элемент массива?');
    
//     if (twoQuestion === null) {    
//       alert ('Вы отменили ввод');
//       return;
//     }
    
//     if (!oneQuestion.trim() || !twoQuestion.trim()) {
//       alert ('Строка пустая или состоит только из пробелов');
//       return;
//     }
    
//     if (oneQuestion.toLowerCase() === fruits[0].toLowerCase() && twoQuestion.toLowerCase() === fruits[fruits.length - 1].toLowerCase()) {
//         alert("Поздравляем! Вы угадали оба слова.");
//     } else if (oneQuestion.toLowerCase() === fruits[0].toLowerCase() || twoQuestion.toLowerCase() === fruits[fruits.length - 1].toLowerCase()) {
//         alert("Вы были близки к победе!");
//     } else {
//         alert("Вы не угадали ни одного слова.");
//     }
//   } 
  
//   rememberWords();