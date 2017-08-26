const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const webmasterModel = new Schema({
    username:{type: String,unique:true,lowercase:true},
    password: String,
    accType:String
})

webmasterModel.methods.comparePassword = function(password){
  if(password==this.password){
     return true;
  }
}

module.exports = mongoose.model('Webmaster',webmasterModel);


