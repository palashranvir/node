const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/users', function (req, res)  {
    res.send('get users')
  })
  app.post('/users', function (req, res)  {
    res.send('post users')
  })
 
app.listen(8080,(req,res)=>{
    console.log("listening to 8080");
});