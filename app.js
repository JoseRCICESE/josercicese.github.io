const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const contractsRouter = require('./routes/contracts');
const patientDataRouter = require('./routes/patientData');

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Serverside of Blockchain based Manager for Medical Records",
			version: "1.0.0",
			description: "Backend API para mi tesis. <br><br> <b>ATENCIÓN:</b> <br> Las operaciones realizadas en este contexto tendrán repercución en la base de datos de la aplicación.",
		},
		servers: [
			{
				//url: "https://trabajo-final-sd.herokuapp.com/",
				url: "http://localhost:3000/"
			},
		],
	},
	apis: ["./controllers/*.js", "./models/*.js", "./config/*.js"],
};

const specs = swaggerJsDoc(options);

const app = express();

app.use(cors()) 
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/contracts', contractsRouter);
app.use('/data', patientDataRouter);

module.exports = app;
