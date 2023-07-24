// window.onload = function() {
//     myButton.addEventListener('click', Registration);
// }
// Подключение кнопки через id //  
const myButton = document.getElementById('submitreg');
// Обработчик событий для кнопки Зарегистироваться //
myButton.addEventListener('click', Registration);

console.log(myButton);
// Класс для создания объектов класса полей пользователя //
let userInfo = {
    password: "",
    login: "",
};


// Вывод в консоль введённых данных //
function Registration() {
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    console.log(login);
    console.log(password);
}