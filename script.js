function seasons() {
    let num = +prompt('Введите номер месяца');
    if (num === 1 || num === 2 || num === 12) {
        alert('Это зимний месяц');
    } else if (num === 3 || num === 4 || num === 5) {
        alert('Это весенний месяц');
    } else if (num === 6 || num === 7 || num === 8) {
        alert('Это летний месяц');
    } else if (num === 9 || num === 10 || num === 11) {
        alert('Это осенний месяц');
    } else {
        alert('Вы ввели неккоректное значение');
    }
}

function rememberWords() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let fruit = fruits.sort(() => Math.random() - 0.5);
    alert(fruit.join(' '));
    
    let oneQuestion = prompt('Чему равнялся первый элемент массива?');
    
    if (oneQuestion === null) {    
        alert ('Вы отменили ввод');
        return;
    }
     
    let twoQuestion = prompt('Чему равнялся последний элемент массива?');
    
    if (twoQuestion === null) {    
      alert ('Вы отменили ввод');
      return;
    }
    
    if (!oneQuestion.trim() || !twoQuestion.trim()) {
      alert ('Строка пустая или состоит только из пробелов');
      return;
    }
    
    if (oneQuestion.toLowerCase() === fruits[0].toLowerCase() && twoQuestion.toLowerCase() === fruits[fruits.length - 1].toLowerCase()) {
        alert("Поздравляем! Вы угадали оба слова.");
    } else if (oneQuestion.toLowerCase() === fruits[0].toLowerCase() || twoQuestion.toLowerCase() === fruits[fruits.length - 1].toLowerCase()) {
        alert("Вы были близки к победе!");
    } else {
        alert("Вы не угадали ни одного слова.");
    }
}
