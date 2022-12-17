let a = document.getElementById("bb1")
let b = document.getElementById("bb2")
let c = document.getElementById("bb3")
// b.addEventListener("click",fun1);
// function fun1(){
//     a.style.display="block";
//     c.style.display="block";
// }

b.addEventListener("mouseenter",fun1);
function fun1(){
    c.style="z-index:-1;"
}

b.addEventListener("mouseleave",fun2);
function fun2(){
    c.style="z-index:1;"
}