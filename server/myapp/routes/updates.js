let express = require ('express');	
let Employee=require('./../model/schema');
	let app=express();

	app.put('/:max_temp',(req, res,next) => {
		console.log(req.params);
	  Employee.update({
	    "city": req.body.city,
	    "date":req.body.date
	    },
	    { $set: {"max_temp": req.params.max_temp }
	  }, {upsert: true}, (err, newUser) => {
	    if (err) {
	      res.send('error updating ');
	    } else {
	      console.log(newUser);
	      res.send(newUser);
	  }
	});
	});
module.exports = app;