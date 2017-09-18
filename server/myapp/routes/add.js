// let express= require('express');
// 	let app=express();
// 	let Employee =require ('./../model/modelschema')

// 	app.post('/', (req, res,next)=> {
// 	  //console.log(req.body.name);
// 	  Employee.insertMany({
// 	  	name:req.body.name,
// 	  	email:req.body.email,
// 	  	password:req.body.password,
// 	  	cpassword:req.body.cpassword
// 	},
// 	(err,data)=>
// 	{
// 		 if(err)
// 		 	console.log(err);
// 		 else
// 		 {
// 		 	 console.log(data);
// 		 	 res.json({data:data});
// 		 }
// 	})
// 	});

// module.exports = app;

let express= require('express');
	let app=express();
	let Employee =require ('../model/modelschema')
	app.post('/', (req, res,next)=> {
	  //console.log(req.body.name);
	  Employee.insertMany({
	  	name:req.body.name,
	  	email:req.body.email,
	  	password:req.body.password,
	  	cpassword:req.body.cpassword
	},
	(err,data)=>
	{
		 if(err)
		 	console.log(err);
		 else
		 {
		 	 console.log(data);
		 	 res.json({data:data});
		 }
	})
	});

module.exports = app;