import express from 'express'
let router = express.Router();

router.get('/',(req,res,next)=>{
  return res.json('aloha')
});
router.post('/data', (req,res,next)=>{
  console.log(req.body);
  res.json({success:true});
});

export default router;