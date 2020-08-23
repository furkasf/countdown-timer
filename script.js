const start = 0.1;
let time = start * 60//eack minutest consit 60 secon(build minutes)

//select document to represnt number on it
const screan = document.querySelector('#screan');

//set interval funtion for recall timedown funtion for each 1000ms
let callcountdown = setInterval(countDown, 1000);

//write count down function
function countDown(){
    const min = Math.floor(time/60);//time return 10 min
    let second = time % 60;//each remind divide by time return sec
    //second = second < 10? '0' + second : second;
    screan.innerText = `${min} : ${second}`;
    if(min == 0 && second == 0){
        clearInterval(callcountdown)
    }
    time--;//after each recal time decreas one and funtion recall one sec every time each sec decrease one
}

function stopcountdown(){//it doesnt work cauz of this func. doesnt call if we use to clearinterval we inport code witin called funtşon with interval method
    if(min == 0 && second == 0){
        clearInterval(callcountdown)
    }
}