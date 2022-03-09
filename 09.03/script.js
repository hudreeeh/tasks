let openBtn = document.querySelector('#open-model');
let model = document.querySelector('#model');

const showNotification = (options) => {
    model.textContent = options.html;
    model.classList.add(options.className);
    model.classList.add('d-block');
    setTimeout(hideNotification, 1500);
    model.style.backgroundColor = '#d3d3d4';
    model.style.color = '#141619';
    model.style.borderRadius = '4px';
    model.style.borderColor = '#bcbebf';
}

const hideNotification = () => {
    model.classList.remove('d-block')
}

openBtn.addEventListener('click', ()=>{
    showNotification({html:'Hello world', className:'welcome'});
});

//! для первого блока
// model.style.backgroundColor = '#cfe2ff';
// model.style.color = '#084298';
// model.style.borderRadius = '4px';
// model.style.borderColor = '#b6d4fe';

//! для второго блока
// model.style.backgroundColor = '#e2e3e5';
// model.style.color = '#41464b';
// model.style.borderRadius = '4px';
// model.style.borderColor = '#d3d6d8';

//! для третьего блока
// model.style.backgroundColor = '#d1e7dd';
// model.style.color = '#0f5132';
// model.style.borderRadius = '4px';
// model.style.borderColor = '#badbcc';

//! для четвертого блока
// model.style.backgroundColor = '#f8d7da';
// model.style.color = '#842029';
// model.style.borderRadius = '4px';
// model.style.borderColor = '#f5c2c7';

//! для пятого блока
// model.style.backgroundColor = '#fff3cd';
// model.style.color = '#664d03';
// model.style.borderRadius = '4px';
// model.style.borderColor = '#ffecb5';

//! для шестого блока 
// model.style.backgroundColor = '#cff4fc';
// model.style.color = '#055160';
// model.style.borderRadius = '4px';
// model.style.borderColor = '#b6effb';

//! ддя седьмого блока
// model.style.backgroundColor = '#fefefe';
// model.style.color = '#636464';
// model.style.borderRadius = '4px';
// model.style.borderColor = '#fdfdfe';


