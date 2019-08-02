function getNumber(number) {
    let getValue = document.getElementById('answers');
    switch (number) {
        case 1:
            getValue.value += '1';
            break;
        case 2:
            getValue.value +=   '2';
            break;
        case 3:
            getValue.value += '3';
            break;
        case 4:
            getValue.value += '4';
            break;
        case 5:
            getValue.value += '5';
            break;
        case 6:
            getValue.value += '6';
            break;
        case 7:
            getValue.value += '7';
            break;
        case 8:
            getValue.value += '8';
            break;
        case 9:
            getValue.value += '9';
            break;
        case 0:
            getValue.value += '0';
            break;
    }
}
function getOperators(operator) {
    let getValue = document.getElementById('answers');
    switch (operator) {
        case '+':
            getValue.value += '+';
            break;
        case '-':
            getValue.value += '-';
            break;
        case '*':
            getValue.value += '*';
            break;
        case '/':
            getValue.value += '/';
            break;
    }
}
function getclear(clear){
    let getValue =document.getElementById('answers').value ="";
}

function calulate(){
    let getValue = document.getElementById('answers');
    let answers = Math.abs(eval(getValue.value));
    document.getElementById('answers').value = answers;
}
