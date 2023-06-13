'use strict'

let y
let x = 0
let login
let password1
let password2
let password
let your_login
let your_password
let autentificate
var aut


function as1(){
  alert('Если у вас есть другой аккаунт - он удалится!')
  login = prompt('Введите ваш логин', '');
  password1 = prompt('Введите ваш пароль', '');
  password2 = prompt('Повторите пароль', '')

  while (x == 0) {
    if (password1 == password2)  {
      password = password1
      x = 1
      alert('Регистрация успешна!')
      localStorage.setItem('login1', login)
      localStorage.setItem('password1', password)

    } else {
        password2 = prompt('Не верно. Повторите пароль', '')
    }
  }

}

function as2() {
  login = localStorage.getItem('login1')
  password = localStorage.getItem('password1')
  your_login = prompt('Введите логин', '')
  if (your_login == login) {
    your_password = prompt('Введите пароль', '')
    if (your_password == password) {
      y = 1


      alert(`Вы успешно вошли в аккаунт ${login}`)
      document.getElementById("exit").style.display = "block";
      document.getElementById("reg").style.display = "none";
      document.getElementById("vhod").style.display = "none";
      document.getElementById('ur_name').innerHTML = your_login;
      document.getElementById("ur_name").style.display = "block";
      document.getElementById("avatar").style.display = "block";
      oa1()
    } else{
      alert('Не верный пароль')
    }
  } else {
    alert('Не верный логин')
  }
};

function as3() {
  document.getElementById("exit").style.display = "none";
  document.getElementById("reg").style.display = "block";
  document.getElementById("vhod").style.display = "block";
  document.getElementById("vhod").style.position = "relative";
  document.getElementById("vhod").style.left = "105px";
  document.getElementById("vhod").style.bottom = "90px";
  document.getElementById("ur_name").style.display = "none";
  document.getElementById("avatar").style.display  = "none";
}
