let express = require ('express');	
let Employee=require('./../model/schema');
	let app=express();
	app.delete('/:date/:city',(req, res,next) =>{
	  Employee.remove({
	    'date': req.params.date,
	    'city': req.params.city
	  }, (err, userData) => {
	    if(err) {
	      res.send('error removing')
	    } else {
	      console.log(userData);
	      res.json(userData);
	  }
	});
	});
module.exports = app;