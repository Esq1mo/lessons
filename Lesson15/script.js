const validName = document.getElementById('name'),
validPhone = document.getElementById('phone'),
 validCheckbox = document.getElementById('check'),
  button = document.getElementById('button'),
   form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    let result = true;
if (validName.value === '') {
alert('Поле имя должно быть заполнено');
result = false;
}
else if (validPhone.value === '') {
    alert('Поле телефон должно быть заполнено');
    result = false;
}
else if (!validCheckbox.checked) {
    alert('Поставь галочку');
    result = false;
}
    else {
        alert('Форма отправлена');
    }
})
if (!result) {
    event.preventDefault();
     }
