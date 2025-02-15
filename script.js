//کد مربوط به 24 ساعت الارم
// const selectmenu_hour = document.getElementById("selectmenu_hour");
// console.log(selectmenu_hour);
// for(let i =23 ; i>=0 ; i--){
//     if(i<10){
//         i="0"+i;
//     }
//     let option =`<option value="${i}">${i}</option>`;
//     selectmenu_hour.innerHTML = selectmenu_hour.innerHTML + option;
// }

//کد مربوط 60 دقیقه
// const selectmenu_minute = document.getElementById("selectmenu_minute");
// console.log(selectmenu_minute);
// for(let i =23 ; i>=0 ; i--){
//     if(i<10){
//         i="0"+i;
//     }
//     let option =`<option value="${i}">${i}</option>`;
//     selectmenu_minute.innerHTML = selectmenu_minute.innerHTML + option;
// }


// /////////////////با روش پایین هم میتوان کد بالا را نوشت

const selectmenu=document.querySelectorAll("select");
const timebox = document.getElementById("time");
const setalarmbtn= document.querySelector(".btn");
let alarmtime , alarmstate = "noset" ;
const rington = new Audio("file/SING-2-128.mp3");
const content = document.querySelector(".content");


for(let i = 23 ; i>=0 ; i--){
    i = i < 10 ? "0" + i : i;
    let option =`<option value="${i}">${i}</option>`;
    selectmenu[0].firstElementChild.insertAdjacentHTML('afterend',option);
}
for(let i = 59 ; i>=0 ; i--){
    i = i < 10 ? "0" + i : i;
    let option =`<option value="${i}">${i}</option>`;
    selectmenu[1].firstElementChild.insertAdjacentHTML('afterend',option);
}


//کد های مربوط به تایمر
setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    h = h<10? "0"+ h:h;
    m = m<10? "0"+ m:m;
    s = s<10? "0"+ s:s;

    timebox.innerHTML = `${h}:${m}:${s}`;

    if(alarmtime==`${h}:${m}`){
        rington.play();
        rington.loop=true;
    }
}, 1000);


setalarmbtn.addEventListener('click',function(){
    alarmtime = `${selectmenu[0].value}:${selectmenu[1].value}`;
    if (alarmtime.includes("houe")||alarmtime.includes("minute")) {
        return alert("زمان را به درستی وارد نمایید !!!")
    }
    checkstate(alarmstate);
})
function checkstate(state){
    if(state == "noset"){
        content.classList.add("disable");
        setalarmbtn.innerText = "clear alarm";
        alarmstate = 'set'
    }
    else{
        content.classList.remove("disable");
        alarmtime="";
        rington.pause();
        alarmstate="noset"
        setalarmbtn.innerText = "set alarm";
    }
}



