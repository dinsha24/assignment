var ta=document.getElementById("textarea");
textarea.addEventListener("i",function(e){
  if (e.value==!""){
    window.addEventListener("beforeunload", function (e) {
      e.returnValue="unsaved changes";

  
});
  }

  
  

 
});
