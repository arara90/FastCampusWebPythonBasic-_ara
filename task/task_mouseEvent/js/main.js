var p = document.getElementById("test");
var btn = document.getElementById("btn");
var cnt = 0;
var intv;


//setInterval을 먼저 정의하면 click 안해도 count를 시작하는 현상이 발생! 
/*
var fnc = function(){
    ++cnt;
    p.innerHTML = cnt;
};
*/

btn.addEventListener("click", function(){

    if(btn.innerHTML=="시작"){
        btn.innerHTML = "중지";
        intv = setInterval( function(){
            ++cnt;
            p.innerHTML = cnt;
        },1000);

    } else{
        btn.innerHTML = "시작";
        clearInterval(intv);

    } 
})


