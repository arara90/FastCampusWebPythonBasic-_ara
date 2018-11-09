var date = new Date("1970-01-01");
console.log(date); 
// 결과 :  Thu Jan 01 1970 09:00:00 GMT+0900 (대한민국 표준시)
console.log(date.getTime()); 
// 0

var date1 = new Date("1969-12-31");
console.log(date1.getTime()); // -86400000
//UTC 하루 23시간, 1시간 60분, 1분 60초, 1초 1000밀리초
console.log(24*60*60*1000);  //86400000

//문자열 객체
var str = "fastcampus";
var str1 = "Jo Ara"
console.log(str.length);
console.log(str1.length); //공백도 count

console.log(str.split("t"));    //["fas", "campus"]
console.log(str.indexOf("t"));  //3
console.log(str.charAt(0));     //f

//과제
var now = new Date(); //오늘 날짜
var count = new Date("2018-12-31"); //D-day 날짜
var gap = now.getTime() - count.getTime(); //오늘 날짜와 D-day 날짜의 차를 밀리초로 계산


//두 날짜 사이의 차를 하루로 나눈 값을 소숫점 이하를 버림 연산
gap = Math.floor(gap / (24*60*60*1000) ); 
//Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다

var result = ""; //결과를 반환할 변수

//D-day 계산
if (gap > 0) {
    result =  "+" + gap  
} else if (gap == 0) {
    result = "-Day";
} else {
    result = "-" + -gap;
}
//계산 결과 출력
document.write("D-day를 기준으로 D" + result + "입니다.");