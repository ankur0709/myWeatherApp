    let express = require('express');
    var http = require('http');
	let bodyParser = require('body-parser');
	let mongoose = require('mongoose');
	let fetch = require('./routes/fetch');
	let insert = require('./routes/insert');
	let add = require('./routes/add');
	let find = require('./routes/find');
	let updates = require('./routes/updates');
	let deletes = require('./routes/deletes');
    let config = require('./config/config');
    let path = require('path');
	const app=express();
	let passport=require('passport');
	let passportJwt=require('passport-jwt');
    let cors=require('cors');
    let jwt=require('jsonwebtoken');

let User=require('./model/modelschema');
	var fs = require('fs')
	 require('./config/passport')(passport);
     var apiRoutes= express.Router();
    //var morgan = require('morgan');
    //var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), 
	//    {flags: 'a'})
// app.use(morgan('combined', {stream: accessLogStream}))

	app.use(cors());
	app.use(passport.initialize());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
    app.use(passport.initialize());
    app.use('/find',find);
	app.use('/add',add);
	app.use('/fetch',fetch);
	app.use('/insert',insert);
	app.use('/updates',updates);
	app.use('/deletes',deletes);
	mongoose.connect(config.dbURL,
	{useMongoClient:true});
	//umc used to remove warning when running server
	

// 	app.use((req,res,next)=>{
// 	let err=new Error('Not Found');
// 	//err.status(404);
// 	next(err);
// });




apiRoutes.post('/add',function(req,res){
	console.log(req.body);
	if(!req.body.email || !req.body.password){
		res.json({ success: false, message: 'please enter correct mailId or Password'});
	}
	else{
		var newUser=new User({
	   name : req.body.name,
       email:req.body.email,
       password:req.body.password,
       cpassword:req.body.cpassword      
 
		})
	newUser.save(function(err){
		if(err){
			return res.json({success:false, message:'email already exist'});
		}
		res.json({ success:true,message: 'successfully registered '});
		});
	}
});


apiRoutes.post('/authenticate', function(req, res) {  
  User.findOne({
    email: req.body.email,
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.send({ success: false, message: 'Authentication failed. User not found.' });
    } else {
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && !err) {
        	
        	console.log(user);
          var token = jwt.sign({ id:req.body.id, email:req.body.email }, config.secret, {
            expiresIn: 20000
          });
          res.json({ success: true, token: 'JWT ' + token });
        } else {
          res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
        }
      });
    }
  });
});

apiRoutes.get('/find',passport.authenticate('jwt',{session:false}),
	function(req,res){
		res.send('It worked!! Id is: '+ req.user.email);
	});
apiRoutes.get('/find', passport.authenticate('jwt', { session: false}), function(req, res) {
res.send("success");
});

app.use('/api',apiRoutes);





	mongoose.connection.on("connected",() => {
		console.log("connection");
	})
   app.listen (8080,() => {
   	console.log("Listening");
   });


   module.exports=app;


