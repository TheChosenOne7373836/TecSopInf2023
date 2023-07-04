const express = require('express')
const mysql = require('mysql');
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(express.static('./dist/client'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'alumno',
  password: 'alumnoipm',
  database: 'DBTesting'
});
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database: ' + error.stack);
    return;
  }
  console.log('Connected to the database.');
});


app.listen(port, () => {
  console.log(`Servidor totalmente funcional en  http://localhost:${port}`);
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/ruckj', (req, res) =>{

  res.send('this is an error, i thought it was gone but looks like its not. but hey, if it works dont fix it, they say')

})


app.get('/goofyahh',(req,res) => {

  res.redirect("https://www.youtube.com/watch?v=QxmSePGOcYc#t=3m28s")
})

app.get("/forms", (req, res) => {
  res.send(`
  <html lang="en">
<head class="responsive">
    <head>
        <title>G . SEARCH Official Website LogIn</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

        <link rel="stylesheet" href="/PaginaWeb_FormularioJQuery/loaderstyle.css">
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

      </head>
</head>
<body style="background-color:#2b2c2c;">
    <!-- NO  TOCAR  -->
    <!-- NO  TOCAR  -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
    crossorigin="anonymous"></script>
    <!-- NO  TOCAR  -->
    <!-- NO  TOCAR  -->


    <div class="responsive-page-template-content">
      <header>
        <nav class="navbar navbar-expand-lg bg-dark">

          <div class="container-fluid">
            <a class="navbar-brand">
              <img src="./PagPrincipalLogo/MainLogo.png" style="width:9vw; height:4vw;">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active text-center text-white font-monospace" aria-current="page"  style="padding-right: 4vw;">Recientemente añadido</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-center text-white font-monospace" >Categoria</a>
                </li>
                </li>
                <li class="nav-item">
                <a class="nav-link text-center text-white font-monospace" >Log-In</a>
            </li>
            </ul>
          </div>
        </div>   
      </nav>
    </header>
  </div>

  <div class="text-center" id="container">
          <br>
          <form action = "/insert" id="FormsUser" style="color: white;">

              <label>Nombre de Usuario:</label>
              <input type="text" id="nombreUsuario" name="nombre" class="campo" placeholder = "Nombre">
              <div id="mensaje1" class="errores"></div>
              <br><br><br><br>

              <label>Contraseña:</label>
              <input type="text" id="passwordUsuario" name="apellido" class="campo" placeholder = "Password">
              <div id="mensaje2" class="errores"></div>
              <br><br><br><br>

              <label>Correo electrónico:</label>
              <input type="text" id="mailUsuario" name="correo" class="campo" placeholder = "Mail">
              <div id="mensaje3" class="errores"></div>
              <br><br><br><br>

              <button type="submit" id="enviarForms" class="boton">Enviar</button>
          </form>
      </div>
</body>
</html>`);
});

app.post('/insert', (req, res) => {
  console.log(req);
  const { Nombre, Password, Mail } = req.body;

  const query = 'INSERT INTO Clientes (nombre, contrasena, correo) VALUES (?, ?, ?);';
  connection.query(query, [Nombre, Password, Mail], (error) => {
    if (error) {
      console.error('error al insertar: ', error);
      res.send('error al insertar');
      return;
    }
    res.send('fila insertada correctamente');
  });
});

app.use('/redirect', function(req, res){
  res.sendFile(__dirname + '/PaginaWeb_CarrouselJQuery/index.html');
});

app.use(express.static('PaginaWeb_CarrouselJQuery'));
app.use(express.static('PaginaWeb_FormularioJQuery'));
app.use(express.static('public'))


//por default cuando no hay pagina
app.use((req, res) =>{

  res.status(404).send('Yo soy la unica cosa que te detiene de romper el programa. Agradeceme.')

})




