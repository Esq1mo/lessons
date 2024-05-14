const validName = document.getElementById('name'),
validPhone = document.getElementById('phone'),
validArea = document.getElementById('textarea')
   form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    let result = true;
if (validName.value === '') {
alert('Поле имя должно быть заполнено');
result = false;
} 

else if (validPhone.value === '' || !/^\d+$/.test(validPhone.value)) {
    alert('Поле телефон должно быть заполнено и содержать только цифры');
    result = false;
}
else if (validArea.value === '') {
    alert('Заполните поле вопроса');
    result = false;
}
    else {
        alert('Форма отправлена');
    }
if (!result) {
    event.preventDefault();
     }});
