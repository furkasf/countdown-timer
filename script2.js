const getNum = document.querySelector('#get-time-value');//get num from input
const send = document.querySelector('#sumbit-button');
const screan = document.querySelector('#screan');
const start = getNum.value;
let time = start * 60;

send.addEventListener('click', callCountDown);


function countDown(){
    const min = Math.floor(time / 60);
    let sec = time % 60;
    screan.innerText = `${min} : ${sec}`;
    if(min == 0 && sec == 0){//clear interval is need to return interval it dosnt matter return with varşable or fucntion
        clearInterval(callCountDown);
    }
    time--
}

function callCountDown(){
    const call = setInterval(countDown, 1000);
    
}