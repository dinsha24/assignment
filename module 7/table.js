function changeColor(){
    var table=document.querySelector(".table");
    document.addEventListener("click",function(event){
        event.target.style.backgroundColor="red";
        

    })
    console.log(table);
}
changeColor();