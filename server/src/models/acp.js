/**
 * Created by Kevin on 9/21/2015.
 */

var promise = require('bluebird'),
  mongoose = promise.promisifyAll(require('mongoose')),
  Schema = mongoose.Schema,
  objectId = Schema.Types.ObjectId,
  acpModel;

var acpSchema = new Schema({
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
// acpSchema .virtual('');

//methods
// acpSchema .method({});

//static methods
// acpSchema .static({});

//add plugins
// acpSchema .plugin();

//add indexes
// acpSchema .index({});

//add options
acpSchema.set('toJSON', {getters: true, virtuals: true});

//create the model
acpModel = mongoose.model('acp', acpSchema);
module.exports.acpSchema = acpSchema;
module.exports.acpModel = acpModel;