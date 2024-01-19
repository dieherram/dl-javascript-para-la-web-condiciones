// Stickers
document.querySelector('button').addEventListener('click', function () {
    let value1 = Number(document.querySelector('.input1').value)
    let value2 = Number(document.querySelector('.input2').value)
    let value3 = Number(document.querySelector('.input3').value)
    if (value1 < 0) {
        value1 = 0;
    }

    if (value2 < 0) {
        value2 = 0;
    }

    if (value3 < 0) {
        value3 = 0;
    }

    let total = value1 + value2 + value3;

    textStickers = document.querySelector('.text');
    if (total <= 10) {
        textStickers.innerText = `Llevas ${total} stickers`
    } else {
        textStickers.innerText = `Llevas demasiados stickers`
    }
});