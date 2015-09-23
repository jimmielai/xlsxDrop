import { promisifyAll } from 'bluebird'
let mongoose = promisifyAll(require('mongoose'));
const { Schema, model, Schema: { Types: { ObjectId: objectId } } } = mongoose;
let tempAcpDropModel;

var tempAcpDropSchema = new Schema({
  Project: String,
  "CPFO #": String,
  "CPFO Date": String,
  Description: String,
  "PCO #": String,
  "Approved Amount": String,
  "Pre-Apprvd Days": String,
  "CPFO Remarks": String,
  "Item #": String,
  "Cost Code": String,
  "Item Description": String,
  "Bdgt Est.": String,
  "Bdgt Prop.": String,
  "Bdgt Aprv": String,
  "Bdgt Appd.": String
}, {
  collection: 'acp' //set collection name
});
//virtual fields
// tempAcpDropSchema .virtual('');

//methods
// tempAcpDropSchema .method({});

//static methods
// tempAcpDropSchema .static({});

//add plugins
// tempAcpDropSchema .plugin();

//add indexes
// tempAcpDropSchema .index({});

//add options
tempAcpDropSchema.set('toJSON', {getters: true, virtuals: true});

//create the model
tempAcpDropModel = model('acp', tempAcpDropSchema);
module.exports.tempAcpDropSchema = tempAcpDropSchema;
module.exports.tempAcpDropModel = tempAcpDropModel;