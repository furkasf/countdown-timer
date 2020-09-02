let min = document.getElementById('get-time-value');
const screan = document.getElementById('screan');
const button = document.getElementById('sumbit-button');
let time = min.value * 60;

//let callCountDown = setInterval(countDown(), 1000);

button.addEventListener('click',countDown);

function countDown(){
    let displaymin= Math.floor(time / 60)
    screan.innerText = displaymin+':00';
    min.value = '';
    time--
}