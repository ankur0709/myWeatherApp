let mongoose = require('mongoose');
mongoose.set('debug',true)
let Schema = mongoose.Schema;

let mySchema = new Schema({
  city:  String,
  date: String,
  max_temp: String,
  min_temp:Number,
  humidity:Number,
  Description:String
});

let model = mongoose.model('weather',mySchema);

mySchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports=model;

