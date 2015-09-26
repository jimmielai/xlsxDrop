import { Schema } from 'mongoose'
import ks from 'ks'
export const shortDate = function shortDate(val){
  if(!val) return val;
  return (val.getMonth() + 1) + "/" + val.getDate() + "/" + val.getFullYear();
}

export const createSchema = (schemaName=ks.randomPassword(36),options)=>{
  let schema = new Schema()


  return {
    schemaName: schemaName
  }
}