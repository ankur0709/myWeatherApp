let express= require('express');
	let app=express();
	let Employee =require ('../model/schema')
	app.post('/', (req, res,next)=> {
	  //console.log(req.body.name);
	  Employee.insertMany({
	  	city:req.body.city,
	  	date:req.body.date,
	  	max_temp:req.body.max_temp,
	  	min_temp:req.body.min_temp,
	  	humidity:req.body.humidity,
	  	Description:req.body.Description
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