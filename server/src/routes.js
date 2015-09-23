import express from 'express'
import Promise from 'bluebird'
let router = express.Router();

router.get('/', (req, res, next)=>{
  return res.json('aloha')
});
router.post('/data', (req, res, next)=>{
  let body = req.body || [];
  if(body.length){
    return req.models.tempAcpDrop.collection.insertAsync(body)
      .then(function(v){
        //when inserting an array of docs returns bulkWriteResult (http://docs.mongodb.org/manual/reference/method/BulkWriteResult/#BulkWriteResult)
        if(v.writeErrors.length > 0){
          return new Promise((resolve,reject)=>{
            return reject(v)
          })
        }
        else if(v.nInserted > 0){

        }
      })
    .catch(e=>{
      return res.json({success: false, err:{code:e.writeErrors.code, msg: e.writeErrors.errmsg }})
    })
  }
});

export default router;