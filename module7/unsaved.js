var ta=document.getElementById("textarea");
window.addEventListener("beforeunload", function (e) {
  var Msg = 'unsaved changes';

  (e || window.event).returnValue = Msg; 
  return Msg; 
});