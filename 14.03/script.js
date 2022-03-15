let form = document.querySelector('form');


form.onsubmit = (event) => {
    event.preventDefault();
    let userSurname = document.querySelector('#user-surname').value;
    let userName = document.querySelector('#user-name').value;
    let userOtec = document.querySelector('#user-otec').value;
    let userDate = document.querySelector('#user-date').value;
    let userAddress = document.querySelector('#user-address').value;
    let userSerial = document.querySelector('#user-serial').value;
    let userInn = document.querySelector('#user-inn').value;
    let userDate2 = document.querySelector('#user-date2').value;
    let userNumb = document.querySelector('#user-numb').value;
    let userEmail = document.querySelector('#user-email').value;
    let userBank = document.querySelector('#bank').value;
    let userFact = document.querySelector('#user-fact').value;
    let user = {
        surname: userSurname,
        name: userName,
        otec: userOtec,
        date: userDate,
        address: userAddress,
        serial: userSerial,
        inn: userInn,
        date2: userDate2,
        numb: userNumb,
        email: userEmail,
        bank: userBank,
        fact: userFact
    }

    const showNotification = (options) => {
        model.classList.add('d-block');
        setTimeout(hideNotification, 4000);
        model.style.backgroundColor = '#f8d7da';
        model.style.color = '#842029';
        model.style.borderRadius = '4px';
        model.style.borderColor = '#f5c2c7';
        model.textContent = 'Пожалуйста введите данные в полях Фамилия, Имя, Серийный номер и ИНН';
    }
    const hideNotification = () => {
        model.classList.remove('d-block')
    }
    if(userSurname == '' || userName == '' || userSerial == '' || userInn == '' || userNumb == ''){
        showNotification();
    } else{
        console.log(user);
        window.localStorage.setItem('user', JSON.stringify(user));
        window.location.href = 'index2.html';
    }
}
