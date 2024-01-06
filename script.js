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
