import Mongoose from 'mongoose'
import ks from 'ksplitt'
let Schema = Mongoose.Schema;
export const shortDate = function shortDate(val){
  if(!val) return val;
  return (val.getMonth() + 1) + "/" + val.getDate() + "/" + val.getFullYear();
};

export const createSchema = (schemaName=ks.randomPassword(36),options)=>{
  let schema = new Schema();


  return {
    schemaName: schemaName
  }
};