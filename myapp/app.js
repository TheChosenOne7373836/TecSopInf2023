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



app.use('/redirect', function(req, res){
  res.sendFile(__dirname + '/carrusel.html');
});

app.use(function(req, res){
  if(!req.session.accessToken){
    res.redirect('/redirect');
  }
});

app.use(express.static('public'))




//por default cuando no hay pagina
app.use((req, res) =>{

  res.status(404).send('Yo soy la unica cosa que te detiene de romper el programa. Agradeceme.')

})


