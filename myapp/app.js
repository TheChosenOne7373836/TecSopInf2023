const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`App totalmente funcional en puerto: [${port}]`)
})





app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/about', (req, res) =>{

  res.send('ta bien')

})

app.get('/tiago', (req, res) =>{

  res.send('this is an error, i thought it was gone but looks like its not. but hey, if it works dont fix it, they say')

})

//por default cuando no hay pagina
app.use((req, res) =>{

  res.status(404).send('Yo soy la unica cosa que te detiene de romper el programa. Agradeceme.')

})
