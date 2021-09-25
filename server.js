//MariaDB connection code from: https://github.com/mariadb-corporation/mariadb-connector-nodejs
//CORS reference from: http://expressjs.com/en/resources/middleware/cors.html

const express = require("express");
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();
const port = 3000;

const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sample',
    port: 3306,
    connectionLimit: 5
});

const options = {
    swaggerDefinition: {
        info: {
            title: 'David Jordan REST-like API Assignment 7 & 8',
            version: '1.1.0',
            description: 'Swagger documentation as part of assignment.'
        },
        host: '147.182.165.169:3000',
        basePath: '/',
    },
    apis: ['./server.js']
};

const specs = swaggerJsdoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(cors());

console.log('Hello!');


/**
 * @swagger
 * /agents:
 *     get:
 *      description: Return all agents
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Object agents containing all agents in table 'agents'
 */

//Retrieve data regarding all Agents
app.get('/agents', (req, res) => {
// Connect to the DB
    pool.getConnection().then(conn => {
        // Perform the request that you need (SQL)
        conn.query("SELECT * from agents")
            .then(rows => {
                // Send the response: res.json(rows);
                return res.json(rows);
            })
            .then (res => {
                conn.release();
            })
            .catch(err => {
                conn.release();
            })
    }).catch(err => {
        console.log(err);
    })
// Define the header
})

/**
 * @swagger
 * /agents/agent_code/{agent_code}:
 *     get:
 *      description: Return agent with specified agent code
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Returned agent object containing the specified agent code
 */

//Retrieve data regarding all Agents
app.get('/agents/agent_code/:agent_code', (req, res) => {
    // Connect to the DB
        pool.getConnection().then(conn => {
            // Perform the request that you need (SQL) 
            conn.query(`SELECT * from agents WHERE AGENT_CODE = \"${req.params.agent_code}\"`)
                .then(rows => {
                    // Send the response: res.json(rows);
                    return res.json(rows);
                })
                .then (res => {
                    conn.release();
                })
                .catch(err => {
                    conn.release();
                })
        }).catch(err => {
            console.log(err);
        })
    // Define the header
    })

/**
 * @swagger
 * /agents/agent_name/{agent_name}:
 *     get:
 *      description: Return agent with specified agent name
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Returned agent object containing the specified agent name
 */

//Retrieve data regarding all Agents
app.get('/agents/agent_name/:agent_name', (req, res) => {
    // Connect to the DB
        pool.getConnection().then(conn => {
            // Perform the request that you need (SQL) 
            conn.query(`SELECT * from agents WHERE AGENT_NAME = \"${req.params.agent_name}\"`)
                .then(rows => {
                    // Send the response: res.json(rows);
                    return res.json(rows);
                })
                .then (res => {
                    conn.release();
                })
                .catch(err => {
                    conn.release();
                })
        }).catch(err => {
            console.log(err);
        })
    // Define the header
    })

/**
 * @swagger
 * /agents/working_area/{working_area}:
 *     get:
 *      description: Return agents with specified working area
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Returned agent object containing specified working area
 */

//Retrieve data regarding all Agents
app.get('/agents/working_area/:working_area', (req, res) => {
    // Connect to the DB
        pool.getConnection().then(conn => {
            // Perform the request that you need (SQL) 
            conn.query(`SELECT * from agents WHERE WORKING_AREA = \"${req.params.working_area}\"`)
                .then(rows => {
                    // Send the response: res.json(rows);
                    return res.json(rows);
                })
                .then (res => {
                    conn.release();
                })
                .catch(err => {
                    conn.release();
                })
        }).catch(err => {
            console.log(err);
        })
    // Define the header
    })

/**
 * @swagger
 * /agents/commission/{commission}:
 *     get:
 *      description: Return agent with specified commission
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Returned agent object containing specified commission
 */

//Retrieve data regarding all Agents
app.get('/agents/commission/:commission', (req, res) => {
    // Connect to the DB
        pool.getConnection().then(conn => {
            // Perform the request that you need (SQL) 
            conn.query(`SELECT * from agents WHERE AGENT_CODE = \"${req.params.commission}\"`)
                .then(rows => {
                    // Send the response: res.json(rows);
                    return res.json(rows);
                })
                .then (res => {
                    conn.release();
                })
                .catch(err => {
                    conn.release();
                })
        }).catch(err => {
            console.log(err);
        })
    // Define the header
    })

/**
 * @swagger
 * /agents/phone_no/{phone_no}:
 *     get:
 *      description: Return agent with specified phone number
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Returned agent object containing specified phone number
 */

//Retrieve data regarding all Agents
app.get('/agents/phone_no/:phone_no', (req, res) => {
    // Connect to the DB
        pool.getConnection().then(conn => {
            // Perform the request that you need (SQL) 
            conn.query(`SELECT * from agents WHERE PHONE_NO = \"${req.params.phone_no}\"`)
                .then(rows => {
                    // Send the response: res.json(rows);
                    return res.json(rows);
                })
                .then (res => {
                    conn.release();
                })
                .catch(err => {
                    conn.release();
                })
        }).catch(err => {
            console.log(err);
        })
    // Define the header
    })

/**
 * @swagger
 * /agents:
 *     post:
 *      summary: Post an agent object
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *          components:
 *              schemas:
 *                  User:
 *                      properties:
 *                          id:
 *                              type: integer
 *                          name: 
 *                              type: string
 *      produces:
 *          - application/json
 *      responses:
 *          201:
 *              description: Successfully created agent object in the 'agents' table
 */

//Retrieve data regarding all Agents
app.post('/agents', (req, res) => {
    // Connect to the DB
        pool.getConnection().then(conn => {
            // Perform the request that you need (SQL) 
            var agent_code = req.body.agent_code;
            var agent_name = req.body.agent_name;
            var working_area = req.body.working_area;
            var commission = req.body.commission;
            var phone_no = req.body.phone_no;
            var country = req.body.country;
            conn.query(`INSERT INTO agents VALUES (\"${agent_name}\", \"${agent_code}\", \"${working_area}\", \"${commission}\", \"${phone_no}\", \"${country}\")`)
                .then(rows => {
                    // Send the response
                    return res.json(req.body);
                })
                .then (res => {
                    conn.release();
                })
                .catch(err => {
                    conn.release();
                })
        }).catch(err => {
            console.log(err);
        })
    // Define the header
    })


/**
 * @swagger
 * /company:
 *     get:
 *      description: Return all companies
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Object company contaning all companies in table 'company'
 */

//Retrieve data regarding Companies
app.get('/company', (req, res) => {
// Connect to the DB
pool.getConnection().then(conn => {
    // Perform the request that you need (SQL)
    conn.query("SELECT * from company")
        .then(rows => {
            // Send the response: res.json(rows);
            return res.json(rows);
        })
        .then (res => {
            conn.release();
        })
        .catch(err => {
            conn.release();
        })
}).catch(err => {
    console.log(err);
})
// Define the header
})

/**
 * @swagger
 * /customer:
 *     get:
 *      description: Return all customers
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Object customer returning all customers in table 'customer'
 */

//Retrieve data regarding Customers
app.get('/customer', (req, res) => {
// Connect to the DB
pool.getConnection().then(conn => {
    // Perform the request that you need (SQL)
    conn.query("SELECT * from customer")
        .then(rows => {
            // Send the response: res.json(rows);
            return res.json(rows);
        })
        .then (res => {
            conn.release();
        })
        .catch(err => {
            conn.release();
        })
}).catch(err => {
    console.log(err);
})
// Define the header
})

/**
 * @swagger
 * /daysorder:
 *     get:
 *      description: Return all daysorder
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Object daysorder returning all daysorder from table 'daysorder'
 */

//Retrieve data regarding DaysOrder
app.get('/daysorder', (req, res) => {
// Connect to the DB
pool.getConnection().then(conn => {
    // Perform the request that you need (SQL)
    conn.query("SELECT * from daysorder")
        .then(rows => {
            // Send the response: res.json(rows);
            return res.json(rows);
        })
        .then (res => {
            conn.release();
        })
        .catch(err => {
            conn.release();
        })
}).catch(err => {
    console.log(err);
})
// Define the header
})

/**
 * @swagger
 * /despatch:
 *     get:
 *      description: Return all despatch
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Object despatch returning all despatch in table 'despatch'
 */

//Retrieve data regarding Despatch
app.get('/despatch', (req, res) => {
// Connect to the DB
pool.getConnection().then(conn => {
    // Perform the request that you need (SQL)
    conn.query("SELECT * from despatch")
        .then(rows => {
            // Send the response: res.json(rows);
            return res.json(rows);
        })
        .then (res => {
            conn.release();
        })
        .catch(err => {
            conn.release();
        })
}).catch(err => {
    console.log(err);
})
// Define the header
})

/**
 * @swagger
 * /foods:
 *     get:
 *      description: Return all foods
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Object foods returning all foods in table 'foods'
 */

//Retrieve data regarding Foods
app.get('/foods', (req, res) => {
// Connect to the DB
pool.getConnection().then(conn => {
    // Perform the request that you need (SQL)
    conn.query("SELECT * from foods")
        .then(rows => {
            // Send the response: res.json(rows);
            return res.json(rows);
        })
        .then (res => {
            conn.release();
        })
        .catch(err => {
            conn.release();
        })
}).catch(err => {
    console.log(err);
})
// Define the header
})

/**
 * @swagger
 * /listofitem:
 *     get:
 *      description: Return all listofitem
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Object listofitem containing all listofitem in table 'listofitem'
 */

//Retrieve data regarding ListOfItem
app.get('/listofitem', (req, res) => {
// Connect to the DB
pool.getConnection().then(conn => {
    // Perform the request that you need (SQL)
    conn.query("SELECT * from listofitem")
        .then(rows => {
            // Send the response: res.json(rows);
            return res.json(rows);
        })
        .then (res => {
            conn.release();
        })
        .catch(err => {
            conn.release();
        })
}).catch(err => {
    console.log(err);
})
// Define the header
})

/**
 * @swagger
 * /orders:
 *     get:
 *      description: Return all orders
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Object orders returning all orders in table 'orders'
 */

//Retrieve data regarding Orders
app.get('/orders', (req, res) => {
// Connect to the DB
pool.getConnection().then(conn => {
    // Perform the request that you need (SQL)
    conn.query("SELECT * from orders")
        .then(rows => {
            // Send the response: res.json(rows);
            return res.json(rows);
        })
        .then (res => {
            conn.release();
        })
        .catch(err => {
            conn.release();
        })
}).catch(err => {
    console.log(err);
})
// Define the header
})

/**
 * @swagger
 * /student:
 *     get:
 *      description: Return all students
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Object student returning all students in table 'student'
 */

//Retrieve data regarding Students
app.get('/student', (req, res) => {
// Connect to the DB
pool.getConnection().then(conn => {
    // Perform the request that you need (SQL)
    conn.query("SELECT * from student")
        .then(rows => {
            // Send the response: res.json(rows);
            return res.json(rows);
        })
        .then (res => {
            conn.release();
        })
        .catch(err => {
            conn.release();
        })
}).catch(err => {
    console.log(err);
})
// Define the header
})

/**
 * @swagger
 * /studentreport:
 *     get:
 *      description: Return all studentreport
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Object studentreport returning all studentreports in table 'studentreport'
 */

//Retrieve data regarding StudentReports
app.get('/studentreport', (req, res) => {
// Connect to the DB
pool.getConnection().then(conn => {
    // Perform the request that you need (SQL)
    conn.query("SELECT * from studentreport")
        .then(rows => {
            // Send the response: res.json(rows);
            return res.json(rows);
        })
        .then (res => {
            conn.release();
        })
        .catch(err => {
            conn.release();
        })
}).catch(err => {
    console.log(err);
})
// Define the header
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})