const express = require('express')
const app = express()



app.get('/read', function (req, res)  {
    console.log(req.query);
    res.send('reading response')
  })



  app.listen(8080,(req,res)=>{
    console.log("listening to 8080");
});