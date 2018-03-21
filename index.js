'use strict'

var mongoose =  require ('mongoose');
var app = require('./app');
var port = 3800;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/red_social')
	.then(()=>{
		console.log("Conexion exitosa a DB");
		app.listen(port,()=>console.log("Listen in "+port+"..."))
	})
	.catch(err => console.log("Error en la conexion de DB"));

