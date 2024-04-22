function getSeason() {
    let month = +prompt ('Введите число от 1 до 12');
    if (month == 1 || month == 2|| month == 12) {
            return('Зима');
    } else if (month  == 3 || month == 4 || month == 5) {
            return('Весна');
    } else if (month == 6 || month == 7 || month == 8) {
            return('Лето');
    } else if (month == 9 || month == 10 || month == 11) {
            return('Осень')
    }
    else {
        return('Число не в том диапазоне')
    }
}
alert(getSeason());