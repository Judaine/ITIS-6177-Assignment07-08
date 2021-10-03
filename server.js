//MariaDB connection code from: https://github.com/mariadb-corporation/mariadb-connector-nodejs
//CORS reference from: http://expressjs.com/en/resources/middleware/cors.html

const express = require("express");
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');

//Routing require
const agentRoutes = require('./routes/agentroutes');
const companyRoutes = require('./routes/companyRoutes');
const customerRoutes = require('./routes/customerRoutes');
const daysorderRoutes = require('./routes/daysorderRoutes');
const despatchRoutes = require('./routes/despatchRoutes');
const foodsRoutes = require('./routes/foodsRoutes');
const listofitemRoutes = require('./routes/listofitemRoutes');
const ordersRoutes = require('./routes/ordersRoutes');
const studentRoutes = require('./routes/studentRoutes');
const studentreportRoutes = require('./routes/studentreportRoutes');
const sayRoutes = require('./routes/sayRoutes');

const app = express();
const port = 3000;

const options = {
    swaggerDefinition: {
        info: {
            title: 'David Jordan REST-like API Assignment 7 & 8',
            version: '1.1.0',
            description: 'Swagger documentation as part of assignment.'
        },
        host: 'localhost:3000',
        basePath: '/',
    },
    apis: [
        './server.js', 
        './routes/agentRoutes.js', 
        './routes/customerRoutes.js', 
        './routes/companyRoutes.js', 
        './routes/daysorderRoutes.js', 
        './routes/despatchRoutes.js', 
        './routes/foodsRoutes.js',
        './routes/listofitemRoutes.js',
        './routes/ordersRoutes.js',
        './routes/studentRoutes.js',
        './routes/studentreportRoutes.js',
        './routes/sayRoutes.js'
    ]
};

const specs = swaggerJsdoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
//app.use(express.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('tiny'));
app.use(cors());

app.use('/agents', agentRoutes);
app.use('/customer', customerRoutes);
app.use('/company', companyRoutes);
app.use('/daysorder', daysorderRoutes);
app.use('/despatch', despatchRoutes);
app.use('/foods', foodsRoutes);
app.use('/listofitem', listofitemRoutes);
app.use('/orders', ordersRoutes);
app.use('/student', studentRoutes)
app.use('/studentreport', studentreportRoutes);
app.use('/say', sayRoutes);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})