let login = document.querySelector('#login');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');

// Create base user //
let userInfo = {};

function User(login, password) {
    this.login = login;
    this.password = password;
}

function createId(users) {
    return Object.keys(users).length;
}
// Подключаем обработчик событий при нажатии на кнопку //
document.getElementById("submit").addEventListener("click" ,() => {
    const loginUser = name.value;
    const passwordUser = password.value;

    const user = new User(loginUser, passwordUser)
    const userId = 'User' + createId(users);
    users[userId] = user;
    
    console.log(user);
})