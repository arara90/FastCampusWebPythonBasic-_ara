 document.getElementById("heading").innerHTML = "h1 태그입니다." ;//문자열처럼 쓰면 된다.

 //document.getElementsByClassName("paragraph").innerHTML = "p태그입니다." ;
 document.getElementsByClassName("paragraph")[1].innerHTML = "classname -> p태그입니다." ;//접근하고자 하는 엘리먼트의 인덱스를 지정해줘야한다.

 //TagName
 var tagName =  document.getElementsByTagName("p");
 var len = tagName.length ; // p 태그들 저장
 for ( var i = 0 ; i < len ; ++i ){
    document.getElementsByTagName("p")[i].innerHTML = "tagname ->p태그입니다." 
    
 }

 //Selector
 document.querySelectorAll("div#container > h1#heading")[0].innerHTML = "h1 태그입니다!!!!!!!!!"