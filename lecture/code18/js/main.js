//객체 선언
var cat = {gender : "female", age:5};

// 타입?
console.log(typeof cat);  //결과 : object

//get
console.log(cat.gender); //결과 : female

//set
cat.gender = "male";
cat.age = 10;
console.log(cat.gender, cat.age); //결과 : male 10

//배열도 하나의 객체이며 속성을 갖는다.
var arr = [1,2,3,4,5];
console.log(arr.length);

//내장객체
var pi=Math.PI;
console.log(pi);

var pow = Math.pow(2,4); //2의 4제곱
console.log(pow);

var rand = Math.random(); //0 <= x < 1 random값
console.log(rand);



/*강의에서 보았던 객체를 정의하는 방법을 통해 "user"라는 이름의 객체를 
 성, 이름, 사는 곳 등의 속성(Properties)을 갖도록 선언해보세요.*/
 var user = {gender:'female' , name:'ara', address:'earth' };
 console.log(user.gender, user.name, user.address);