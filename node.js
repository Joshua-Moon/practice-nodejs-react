// const http = require('http');

// http.createServer((req, res)=>{
//   console.log("we get the request")
//   res.write("hellow world")
//   res.end('hello');
// }).listen(8080); 

const express = require('express')
const url = require('url')

const app = express()
const port = 8080
app.get('/', function (req, res) {
  const path = url.parse(req.url).path;
  res.write(path)
  res.end();
})
app.listen(port, function () {
  console.log(`application is listening on port ${port}`)
})
