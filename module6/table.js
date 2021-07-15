var table=document.querySelector("table");
var  column=document.querySelectorAll(".c2");
table.addEventListener("click",function (event){
    for(let i=0;i<column.length ;i++){
        column[i].style.backgroundColor = "green" ;
    }
})