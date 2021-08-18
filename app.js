function fourMakePin() {
    let setPin = Math.random() * 10000
    let pin = Math.round(setPin);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;

    }
    else {
        return fourMakePin();
    }
}

function generatePin() {
    const pin = fourMakePin();
    document.getElementById('display-pin').value = pin;
}

// function fourMakePin() {
//     const pin = Math.round(Math.random() * 10000);
//     const pinString = pin + '';
//     if (pinString.length == 4) {
//         return pin;
//     }
//     else {
//         // console.log('got 3 digit and calling again', pin);
//         return fourMakePin();
//     }
// }
// function generatePin() {
//     const pin = fourMakePin();
//     document.getElementById('display-pin').value = pin;
// }

document.getElementById('key-pad').addEventListener('click', function (event) {
    const numbers = event.target.innerText;
    const numberShow = document.getElementById('number-show');
    if (isNaN(numbers)) {
        if (numbers == 'C') {
            numberShow.value = '';
        }
    }
    else {
        const numberValue = numberShow.value;
        const presentNumberShow = numberValue + numbers;
        numberShow.value = presentNumberShow;
    }
})




function verified() {

    const displayPin = document.getElementById('display-pin').value;
    const typed = document.getElementById('number-show').value;


    const submitSuccus = document.getElementById('successMessage');
    const submitFaild = document.getElementById('errorMessage');

    if (displayPin == typed) {
        submitSuccus.style.display = 'block';
        submitFaild.style.display = 'none';
    }
    else {

        console.log(submitFaild);
        submitSuccus.style.display = 'none';
        submitFaild.style.display = 'block';
    }
}