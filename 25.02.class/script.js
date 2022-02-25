
let ques = prompt('Кто пришел?');
if(ques == 'Admin'){
    let pass = prompt('Пароль?');
    if(pass == 'hello'){
        alert('Добро пожаловать!');
    }
    else if(pass == null){
        alert('Вход отменен');
    }
    else{
        alert('Пароль неверен');
    }
} else if(ques == null){
    alert('Вход отменен');
} else{
    alert('Я вас не знаю');
}