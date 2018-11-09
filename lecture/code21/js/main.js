var test = document.getElementById("test");
//window.open("https://www.google.com"); //open: 새로운 브라우저(탭)에 열림
//window.close(); //요로묜 index페이지는 닫히고 구글만 남음

//var tOf = window.confirm("true or false"); //사용자에게 확인 요청 (확인버튼)
//test.innerHTML = tOf;
test.innerHTML = "width:" + window.innerWidth + " height : "  + window.innerHeight +"," + window.outerHeight;
/*  
    픽셀 단위로 값을 보여줌
    inner : 오로지 컨텐츠 영역(흰부분) 
    outer : 메뉴바를 포함한 브라우저 전체 범위
*/

window.alert("count시작");

var x = 0;

window.setInterval("interval()", 1000);
function interval(){
    test.innerHTML = ++x; 
}