const express = require('express')
const app = express()
const port = 3000

app.use(express.static('./dist/client'));
app.use(express.static('public'));




app.listen(port, () => {
  console.log(`App totalmente funcional en puerto: [${port}]`)
})


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
  res.sendFile(__dirname + '/PaginaWeb_FormularioJQuery/LogIn.html');
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


