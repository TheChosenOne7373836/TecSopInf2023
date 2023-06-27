const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'alumno',
  password: 'alumnoipm',
  database: 'DBTesting'
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a DB: ' + error.stack);
    return;
  }
  console.log('Conectado a DB');
});


// Manejar la solicitud POST del formulario
  const nombreUsuario = $('#nombreUsuario').val().trim();
  const passwordUsuario = $('#passwordUsuario').val().trim();
  const mailUsuario = $('#mailUsuario').val().trim();

  if (nombreUsuario === '') {
    mostrarError('#mensaje1', 'Ingrese nombre');
  } else if (passwordUsuario === '') {
    mostrarError('#mensaje2', 'Ingrese una contraseña');
  } else if (mailUsuario === '') {
    mostrarError('#mensaje3', 'Ingrese un mail');
  } else if (!validarEmail(mailUsuario)) {
    mostrarError('#mensaje3', 'Mail invalido');
  } else {
    const data = {
      name: nombreUsuario,
      password: passwordUsuario,
      mail: mailUsuario
    };
    
    const query = 'INSERT INTO Clientes SET ?';
    connection.query(query, data, (error, results) => {
      if (error) {
        console.error('Error al insertar: ' + error.stack);
        return;
      }
      console.log('Datos insertados');
    });
    connection.end((error) => {
      if (error) {
        console.error('Error al cerrar la conexion: ' + error.stack);
        return;
      }
      console.log('Conexion terminada');
    });
  };

// Iniciar el servidor
app.listen(port, () => {
  console.log('Puerto de servidor: ' + port);
});

function mostrarError(selector, mensaje) {
  $(selector).text(mensaje).show();
}

function validarEmail(email) {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}
