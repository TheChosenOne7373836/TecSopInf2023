//JS

//var formulario = document.getElementById("FormsUser");
//var enviar = document.getElementById("enviarForms");

//enviar.addEventListener("click", function(event) {

//  if (!formulario.checkValidity()) {

//    alert("Por favor completar los campos");
//    event.preventDefault(); 
//  }
//});


//JQuery

$(document).ready(function(){
  $("#enviarForms").click(function(){

    var nombre = $("#ITnombre").val();
    var contrasena = $("#ITpassword").val(); 
    var mail = $("#ITmail").val();

    if(nombre =""){
      $("mensaje1").fadeIn();
      return false;
    } else {
      $("#mensaje1").fadeOut();
    }

    if(contrasena =""){
      $("mensaje2").fadeIn();
      return false;
    } else {
      $("#mensaje2").fadeOut();
    }

    if(mail =""){
      $("mensaje3").fadeIn();
      return false;
    } else {
      $("#mensaje3").fadeOut();
    }

  });
})
