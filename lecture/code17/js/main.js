
/////////////////////////////////////if문 
var x = 10, y = '10', z=true;
if(x==10){
    console.log("x는 10입니다")
} else if(y==10) {
    console.log("y는 10입니다")
} else{
    console.log("모든 조건이 거짓입니다.")
}
//결과 : x는 10입니다

if(x==10 && y===10){
    console.log("&& > true")
} else{
    console.log("&& > false")
}
//결과 : && > false

if(x==10 || y===10){
    console.log("|| > true")
} else{
    console.log("|| > false")
} 
//결과 : || > true

z=false;
if(!z){
    console.log("z > " + z);
} 
//결과 : z > false

/////////////////////////////////////switch문

var a = 10;

switch(a){
    case 10 : console.log("10"); 
      //  break; 
    case 5 : console.log("5");
      // break; 
    default  : console.log("5");
 }

 
 console.log("break");

 switch(a){
    case 10 : console.log("10"); 
        break; 
    
    case 5 : console.log("5");
        break; 
    default  : console.log("5");
 }


//////////////////////////////////////배열
console.log("=====배열======");
var arr = [1,2,3,4,5];
console.log(arr); 

 /////////////////////////////////////for문
 console.log("=====for문======");
 var idx;
 var len = arr.length;
 //console.log(len); 

 for(idx = 0; idx<len; ++idx){
    console.log(arr[idx]); 
 }
 
 /////////////////////////////////////while문
 console.log("=====while문======");
 var index = 0;
 while(index < len){
    console.log(arr[index]); 
    ++index;
 }

  //반복문에 조건을 걸어 강제 중지 시키기
  console.log("=====while문(break)======");
  index = 0;
   while(index < len){
       if (index == 2){
           break;
       }
      console.log(arr[index]); 
      ++index;
   }

   //과제 : 구구단 출력하기
   //문자열 결합 반복 처리하기
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = "";
var len1 = arr1.length;

for(var i = 0; i < len1; ++i){
    
    for (var j = 1; j <= 9; ++j) {
        result += (i+1) +"x" + j + "=" + ( (i+1) * j)  + "<br>";
    }
    
}
document.write(result);
