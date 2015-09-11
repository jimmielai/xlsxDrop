import express from 'express'
let app = express();

app.use(express.static('../../client/build'));

let server = app.listen(8081,()=>{
  let host = server.address().address,
    port = server.address().port;

  console.log('listening on http://%s:%s', host, port)
});