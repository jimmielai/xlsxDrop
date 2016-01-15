import express from 'express'
import bodyParser from 'body-parser'
import models from './models/db'
import routes from './routes'
let app = express();

export default models

app.use(express.static('../../client/build'));
app.use(bodyParser.json({limit:'50mb',extended:false, parameterLimit:100000}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:false, parameterLimit:100000}));

//setup cors
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

//load models on req.models
app.use((req,res,next)=>{
  req.models = models;
});
app.use(routes);

let server = app.listen(8081,()=>{
  let host = server.address().address,
    port = server.address().port;

  console.log('listening on http://%s:%s', host, port)
});