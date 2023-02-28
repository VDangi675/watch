

let hours = 00;
let minute = 00;
let second = 00;
let milisecond = 00;
let interval;


let Start = document.querySelector(".Start")
let Pause = document.querySelector(".Pause")
let Reset = document.querySelector(".Reset")
let Cast = document.querySelector(".Cast")



const StartTimer =()=>{
    clearInterval(interval)
   
    interval = setInterval(startWatch,10)
}

const StopTimer = ()=>{
    clearInterval(interval)
}

const resetTimer = ()=>{
    milisecond = 0;
    second = 0;
    minute = 0;
    hours = 0
    let  MS = document.querySelector(".Milisecond")
let  H = document.querySelector(".hour")
let  M = document.querySelector(".Minute")
let  S = document.querySelector(".Second")

    MS.innerHTML = ": 000 "
    S.innerHTML = ": 00"
    M.innerHTML = " :00"
    H.innerHTML = "00"
    clearInterval(interval)
}

function startWatch()
{
    let  MS = document.querySelector(".Milisecond")
    let  H = document.querySelector(".hour")
    let  M = document.querySelector(".Minute")
    let  S = document.querySelector(".Second")
    milisecond++;
    //console.log(milisecond)

    MS.innerHTML = `${milisecond}`
    if(milisecond<9){
        MS.innerHTML = `00${milisecond}`
    }else if(milisecond<99)
    {
        milisecond=0
        MS.innerHTML = "000"
        second++
    }
    else
    {
        MS.innerHTML = milisecond
    }
    if(second<10){
        S.innerHTML = `0${second}`
    }else
        if(second<59){
            minute++
            second=0
            S.innerHTML = "00"
        }
        else{
            S.innerHTML = second
        }

     if(minute<10){
        M.innerHTML = `0${minute}`
     }
     else if(minute>59){
        hours++;
        minute = 0;
        M.innerHTML = minute
     } 
     else{
        M.innerHTML = minute
     }

     if(hours<10)
     {
        H.innerHTML = `0${hours}`
     }
    else{
        H.innerHTML = hours
    }
}

function Castt()
{
    let res = document.querySelector(".cast")
    let c = 0
    res.innerHTML = ` Cast ${c++} ${milisecond}`
}

// Start.addEventListener("click", StartTimer)
// Pause.addEventListener("click", StopTimer)
// Reset.addEventListener("click", resetTimer)


