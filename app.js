'use strict'

var express =  require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar rutas
var user_routes = require('./routes/user');	


//Middlewares
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
//Cores

//Rutas
app.use('/api', user_routes);

app.get('/', (req,res)=>{
	res.status(200).send({
		message: 'Hola mundo'
	});
});
app.get('/pruebas',(req,res)=>{
	res.status(200).send({
		message: 'Accion de prueba en servidor'
	});
});
//Exportar
module.exports = app;
console.log("app exported... Eduardo Hernandez was here");
