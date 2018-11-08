var test = document.getElementById("test");
var test2 = document.getElementById("test2");

//함수 기본 사용법
function multiply(x,y){
return x*y;
}
test.innerHTML=multiply(2,2);

//interval 예시, 전역변수 x의 사용
var x = 0;
function interval(){
    test.innerHTML = ++x;
}
window.setInterval ("interval()",1000);

//익명함수
var multiply2 = function(x,y){
    return x*y;
}

test2.innerHTML = multiply2(2,4);