// Password
let body = document.querySelector('body')

document.querySelector('button').addEventListener('click', function () {
    let value1 = Number(document.querySelector('#select1').value)
    let value2 = Number(document.querySelector('#select2').value)
    let value3 = Number(document.querySelector('#select3').value)
    let textPassword = document.querySelector('p');
    if (value1 === 9 && value2 === 1 && value3 === 1) {
        textPassword.innerText = `Password 1 correcto`
    } else if (value1 === 7 && value2 === 1 && value3 === 4) {
        textPassword.innerText = `Password 2 correcto`
    } else {
        textPassword.innerText = `Password incorrecto`
    }
});