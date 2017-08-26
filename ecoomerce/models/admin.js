const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const adminModel = new Schema({
    username:{type: String,unique:true,lowercase:true},
    password: String
})


adminModel.methods.comparePassword = function(password){
  if(password===this.password){
     return true;
  }


    //Return either True or False
}

module.exports = mongoose.model('Admin',adminModel);