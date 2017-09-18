let express = require ('express');	
let Employee=require('./../model/modelschema');
let app=express.Router();

app.post('/',(req, res) =>{
  console.log('getting details of users logged in');
  Employee.find({
  	"email":req.body.email,
  	"password":req.body.password
  },
   (err,employees)=>{
      if(err) 
      {
        res.send('error occured')
      }
       else {
       console.log(employees);
        res.json(employees);
    }
 }); 
});
module.exports = app;
