
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('RahulRaodotcom');
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})