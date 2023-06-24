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

connection.connect(function(err) {
  if (err) throw err;
  console.log('Conectado a la base de datos');
});

// Manejar la solicitud POST del formulario
app.post('/FormsUser', (req, res) => {
  const nombreUsuario = req.body.nombreUsuario.trim();
  const passwordUsuario = req.body.passwordUsuario.trim();
  const mailUsuario = req.body.mailUsuario.trim();

  if (nombreUsuario === '') {
    mostrarError('#mensaje1', 'Ingrese nombre');
  } else if (passwordUsuario === '') {
    mostrarError('#mensaje2', 'Ingrese una contraseña');
  } else if (mailUsuario === '') {
    mostrarError('#mensaje3', 'Ingrese un mail');
  } else if (!validarEmail(mailUsuario)) {
    mostrarError('#mensaje3', 'Mail invalido');
  } else {
    // Insertar datos en la base de datos
    const sql = 'insert into Clientes (nombre, contrasena, correo) values ';
    const values = [nombreUsuario, passwordUsuario, mailUsuario];

    connection.query(sql, values, function(err, result) {
      if (err) throw err;
      console.log('Completada: ' + result.affectedRows);

      // Realizar cualquier otra acción necesaria después de la inserción en la base de datos

      res.send('Registro exitoso'); // Enviar una respuesta al cliente
    });
  }
});

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
