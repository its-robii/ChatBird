const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


const userSchema = new Schema({
      fullName : {
        type : String,
        required : true
      },
      email : {
        type : String,
        required : true,
        unique : true
      },
      password : {
        type : String,
        required : true
      },
      avatar : {
        type : String,
        default : "",
      }
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    this.password = await bcrypt.hash(this.password, 10);
    next(); 
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('user', userSchema);