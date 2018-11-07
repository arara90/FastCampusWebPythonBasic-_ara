
var x = 10;
var y;

//후위연산
y = x++;
console.log(y) ;
console.log(x) ;
//x=11 , y=10 출력. 즉, x값을 y에 할당한 후에 ++(덧셈) 연산 수행
console.log("=====================");

var z = 10;
console.log(z+=1); //단항연산
console.log(z=z+1); //이항연산 

console.log("=====================");

var a= 10, b="10";
console.log(a==b); //true
console.log(a===b); //false

console.log("=====================");

//? : 삼항연산
var c;
console.log( c = a==b ? 10 : 11 ); //10
console.log( c = a===b ? 10 : 11 ); //11

//과제; 연산자와 문자열 결합 (형변환)
var str3 = 1 + 1 + "귀요미";  
console.log(typeof str3, str3); //string 2귀요미
var str4 = "귀요미" + 1 + 1;
console.log(typeof str4, str4); //string 귀요미11


//실습
console.log("=====================");
console.log(9999999999999999); //10000000000000000
console.log(0.5+0.1==0.6); //true
console.log(0.1+0.2==0.3); //false