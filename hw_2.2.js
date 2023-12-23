//Exercise 1
let a = 10;
alert(a);
alert(a * 2);
//Exercise 2
const firstIphoneYear = 2007;
alert(`Первый iPhone был выпущен в ${firstIphoneYear} году`);
//Exercise 3
const nameCreatorJS = 'Брендан Эйх';
alert(nameCreatorJS);
//Exercise 4
let x = 10;
let y = 2;
alert(x + y); 
alert(x - y);
alert(x * y);
alert(x / y);
//Exercise 5
let result = 2**5;
alert(result);
//Exercise 6
let num1 = 9, num2 = 2;
alert(num1 % num2);
//Exercise 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
//Exercise 8
let age = prompt('Сколько вам лет?');
alert(age);
//Exercise 9
const user = {
    name: 'Artem',
    age: 33,
    isAdmin: false
}
//Exercise 9.1
console.log(user);
user['city of residence'] = "Saint-Peterburg";
//Exercise 9.2
user.age = 34;
//Exercise 9.3
delete user['city of residence'];
//Exercise 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user);
//Exercise 10
let yourName = prompt('Как вас зовут?');
alert(`Привет, ${yourName}!`);