function sumInput() {
    let numbers = [];
    for (;;) {
        let userInput = prompt("Введите число:");
        if (userInput === null || userInput === "" || !isFinite(userInput)) {
            break;
        }
        numbers.push(+userInput);
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;
}
alert( sumInput() );
