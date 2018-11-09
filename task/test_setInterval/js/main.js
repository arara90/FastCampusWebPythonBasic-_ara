var p = document.getElementById("test");
var btn = document.getElementById("btn");
var cnt = 0;
var intv;


//변수에 먼저 setInterval을 정의하면 click 안해도 count를 시작하는 현상이 발생! 
var innerFnc= function(){
    ++cnt;
    p.innerHTML = cnt;
}

var fnc = setInterval(innerFnc ,1000);
//함수명(); 자체가 함수를 호출 한 것.

console.log(fnc); //1
console.log(typeof fnc); //numeric
console.log(setInterval) //setIntervalID
//setInerval은 numberic으로 SetIntervalID를 반환한다

// var fnc2 = setInterval(innerFnc, 1000);
// console.log(fnc2)

btn.addEventListener("click", function(){

    if(btn.innerHTML=="시작"){
        btn.innerHTML = "중지";
        

    } else{
        btn.innerHTML = "시작";
        clearInterval(1);

    } 
})
