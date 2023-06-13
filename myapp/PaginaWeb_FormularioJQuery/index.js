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
        var mysql      = require('mysql');
        var connection = mysql.createConnection({
          host     : 'localhost',
          user     : 'alumno',
          password : 'alumnoipm',
          database : 'DBTesting' 
        });
      
        connection.connect(function(err){
          if(err) throw err;
          console.log("Conectado");
          var sql = "INSERT INTO Clientes(Nombre, Contrasena, Correo) values ";
          var resultados = [
            [nombreUsuario, passwordUsuario, mailUsuario]
        ]
        })
  
        connection.query(sql, [resultados], function(err, result){
          if(err) throw err;
          console.log("Insercion completada: " + result.affectedRows);
        })

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
  