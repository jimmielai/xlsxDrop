import express from 'express'
let router = express.Router();

router.get('/', (req, res, next)=>{
  return res.json('aloha')
});
router.post('/data', (req, res, next)=>{
  let body = req.body || [];
  if(body.length){
    req.models.acp.collection.insertAsync(body).then(function(v){
      //todo returns bulk write result if writing an array of docs
    })
  } else {
    return res.json({success: false});
  }
});

export default router;