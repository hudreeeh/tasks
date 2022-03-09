let openBtn = document.querySelector('#open-model');
let model = document.querySelector('#model');
const showNotification = (options) => {
    model.textContent = options.html;
    model.classList.add(options.className);
    model.classList.add('d-block');
    setTimeout(hideNotification, 1500);
}
const hideNotification = () => {
    model.classList.remove('d-block')
}
openBtn.addEventListener('click', ()=>{
    showNotification({html:'Hello world', className:'welcome'});
});