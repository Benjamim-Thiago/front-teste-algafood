/*
const app = require('express')()
const path = require('path')

app.get('/', (req, res) => {
    // aqui precisamos enviar o index.html para o cliente
    res.sendFile(path.join(__dirname + '/public/*'))
})

  app.listen(8082)
  console.log('8082 é a porta mágica!')

  */

 const express = require('express');
 const app = express();
 
 app.use(express.static(__dirname + '/public'));
 
 
 app.get('/*', function(req, res){
     res.sendFile(__dirname +  'index.html');
 });
 app.listen(8082);

 console.log('8082 é a porta mágica!')

