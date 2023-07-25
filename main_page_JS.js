// Подключение кнопки через id //  
const myButton = document.getElementById('submitreg');
// Обработчик событий для кнопки Зарегистироваться //
myButton.addEventListener('click', Registration);

// Класс для создания объектов класса полей пользователя //
let users = {};

function User(password, login) {
    this.password = password;
    this.login = login;
    // this.name = name;
}
// Создание нового объекта //

function createid(users) {
    return Object.keys(users).length;
}

// Вывод в консоль введённых данных //
function Registration() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const user = new User(password, login);
    const userId = 'User' + createid(users);
    users[userId] = user;
    console.log(user);
}