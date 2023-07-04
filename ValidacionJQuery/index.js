$(document).ready(function() {
    $('#FormsUser').submit(function(event) {
      event.preventDefault(); // no se puede enviar form. como està
  
      var nombreUsuario = $('#nombreUsuario').val().trim();
      var passwordUsuario = $('#passwordUsuario').val().trim();
      var mailUsuario = $('#mailUsuario').val().trim();
  
      // oculta mensajes de error
      $('.errores').hide();
  
      if (nombreUsuario === '') {
        mostrarError('#mensaje1', 'Ingrese nombre');
      } else if (passwordUsuario === '') {
        mostrarError('#mensaje2', 'Ingrese una contraseña');
      } else if (mailUsuario === '') {
        mostrarError('#mensaje3', 'Ingrese un mail');
      } else if (!validarEmail(mailUsuario)) {
        mostrarError('#mensaje3', 'Mail invalido');
      } else {
        // redirecciona a archivo en misma carpeta
        window.location.href = 'ThankYou.html';
      }
    });
  
    function mostrarError(selector, mensaje) {
      $(selector).text(mensaje).show();
    }
  
    function validarEmail(email) { //verifica mail
      var regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      return regex.test(email);
    }
  });
  