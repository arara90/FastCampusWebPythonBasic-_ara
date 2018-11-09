//edge에서는 안나옴
//e라는 기본 매개변수 사용..

/*document.getElementsByName("testText")[0].onkeydown = function(e){
    var eventCode = e.code;
    console.log(eventCode, typeof eventCode);

    if(eventCode=='Digit1')
    {
        document.getElementById("test").innerHTML = "<img src = 'static/1.jpg'>"
    } else if(eventCode=='Digit2'){
        document.getElementById("test").innerHTML = "<img src = 'static/2.jpg'>"
    } else if(eventCode=='Backspace'){
        document.getElementById("test").innerHTML = "";
    }
}
*/
//keydown시 Digit1 string , Backspace string , KeyA string...

//버튼 선택시 일어나는 이벤트
document.getElementsByClassName("btn")[0].onfocus = function(e){
    document.getElementById("test").innerHTML = "tab을 이용한 이벤트 -> onmouseover";
}

document.getElementsByClassName("btn")[0].onblur = function(e){
    document.getElementById("test").innerHTML = "tab을 이용한 이벤트 -> onmoseout";
}