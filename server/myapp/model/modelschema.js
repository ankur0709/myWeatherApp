let mongoose = require('mongoose');
mongoose.set('debug',true)
let Schema = mongoose.Schema;

let register = new Schema({
  name:String,
  email:{type:String, unique:true},
  password:String,
  cpassword:String
},{collection:'register',versionKey:false});



// register.pre('save', function (next) {  
//   var user = this;
//   console.log(user);
//   if (this.isModified('password') || this.isNew) {
//     bcrypt.genSalt(10, function (err, salt) {
//       if (err) {
//         return next(err);
//       }
//       bcrypt.hash(user.password, salt, function(err, hash) {
//         if (err) {
//           return next(err);
//         }
//         user.password = hash;
//         next();
//       });
//     });
//   } else {
//     return next();
//   }
// });


register.methods.comparePassword=function(pw,cb){
	
		if(this.password==pw){
			return cb(null,true);
		}
		else
		cb(null,false);
	
};

let model = mongoose.model('register',register);


module.exports=model;

