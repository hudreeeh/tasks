let form = document.querySelector('form');
form.onsubmit = (event) => {
    event.preventDefault();
    let orgName = document.querySelector('#org-name').value;
    let userRank = document.querySelector('#user-rank').value;
    let userSalary = document.querySelector('#user-salary').value;
    let userSalary2 = document.querySelector('#user-salary2').value;
    let tel = document.querySelector('#tel').value;
    let price = document.querySelector('#price').value;
    let quantity = document.querySelector('#quantity').value;
    let sum = document.querySelector('#sum').value;
    let creditType = document.querySelector('#credit-type').value;
    let creditDuration = document.querySelector('#credit-duration').value;
    let place = document.querySelector('#place').value;
    let credit = {
        org: orgName,
        rank: userRank,
        salary: userSalary,
        salary2: userSalary2,
        telephone: tel,
        cost: price,
        amount: quantity,
        overall: sum,
        credit_type: creditType,
        credit_duration: creditDuration,
        site: place
    }
    console.log(credit);
}