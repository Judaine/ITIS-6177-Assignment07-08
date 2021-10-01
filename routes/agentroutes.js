const express = require('express');
const router = express.Router();
const pool = require('../db');
const { body, validationResult } = require('express-validator');

/**
 * @swagger
 * /agents:
 *  get:
 *    description: Return all agents in table
 *    responses:
 *      '200':
 *        description: Successfully returned all agents
 */
 router.get('/', (req, res) => {
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
 * /agents/{agent_code}:
 *  get:
 *    summary: Get a name message
 *    parameters:
 *    - in: path
 *      name: agent_code
 *      schema:
 *        type: string
 *      required: true
 *    description: Use to return the agent with specified agent_code
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/:agent_code', (req, res) => {
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
 *  get:
 *    summary: Get a name message
 *    parameters:
 *    - in: path
 *      name: agent_name
 *      schema:
 *        type: string
 *      required: true
 *    description: Use to return the agent with specified agent_name
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/agent_name/:agent_name', (req, res) => {
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
 *  get:
 *    summary: Get a name message
 *    parameters:
 *    - in: path
 *      name: working_area
 *      schema:
 *        type: string
 *      required: true
 *    description: Use to return the agent(s) with specified working_area
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/working_area/:working_area', (req, res) => {
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
 *  get:
 *    summary: Get a name message
 *    parameters:
 *    - in: path
 *      name: commission
 *      schema:
 *        type: string
 *      required: true
 *    description: Use to return the agent(s) with specified commission
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/commission/:commission', (req, res) => {
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
 *  get:
 *    summary: Get a name message
 *    parameters:
 *    - in: path
 *      name: phone_no
 *      schema:
 *        type: string
 *      required: true
 *    description: Use to return the agent with specified phone_no
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/phone_no/:phone_no', (req, res) => {
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
 *   post:
 *    summary: Get a name message
 *    parameters:
 *    - name: AGENT_NAME
 *      required: true
 *      type: String
 *    - name: AGENT_CODE
 *      required: true
 *      type: String
 *    - name: WORKING_AREA
 *      required: true
 *      type: String
 *    - name: COMMISSION
 *      required: true
 *      type: Integer
 *    - name: PHONE_NO
 *      required: true
 *      type: String
 *    - name: COUNTRY
 *      required: true
 *      type: String
 *    responses:
 *        201:
 *            description: Successfully created agent object in the 'agents' table
 */
router.post('/', [
    body('AGENT_CODE').isLength({ min: 1, max: 6}).trim().escape(),
    body('AGENT_NAME').isLength({ min: 1, max: 15}).trim().escape(),
    body('WORKING_AREA').isLength({ min: 1, max: 15}).trim().escape(),
    body('COMMISSION').isNumeric().isLength({min: 1, max: 5}).trim().escape(),
    body('PHONE_NO').isLength({ min: 1, max: 15}).trim().escape(),
    body('COUNTRY').isLength({ min: 1, max: 12}).trim().escape()
],
(req, res) => {
    var agent_code = req.body.AGENT_CODE;
    var agent_name = req.body.AGENT_NAME;
    var working_area = req.body.WORKING_AREA;
    var commission = req.body.COMMISSION;
    var phone_no = req.body.PHONE_NO;
    var country = req.body.COUTNRY;
    // Connect to the DB
        pool.getConnection().then(conn => {
            // Perform the request that you need (SQL) 
            conn.query(`INSERT INTO agents (AGENT_NAME, AGENT_CODE, WORKING_AREA, COMMISSION, PHONE_NO, COUNTRY) VALUES (\"${agent_name}\", \"${agent_code}\", \"${working_area}\", ${commission}, \"${phone_no}\", \"${country}\");`)
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
 * /agents:
 *     put:
 *      summary: Put an agent object, update AGENT_NAME by AGENT_CODE
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
 *              description: Successfully updated agent object in the 'agents' table
 */
 router.put('/:agent_code', [
    body('AGENT_NAME').isLength({ min: 1, max: 15}).trim().escape(),
 ], (req, res) => {
    var agent_name = req.body.AGENT_NAME;
    console.log(agent_name)
    // Connect to the DB
        pool.getConnection().then(conn => {
            // Perform the request that you need (SQL)
            conn.query(`UPDATE agents SET AGENT_NAME = \"${agent_name}\" WHERE AGENT_CODE = \"${req.params.agent_code}\";`)
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
 * /agents/{agent_code}:
 *  delete:
 *    summary: Delete an agent entry.
 *    parameters:
 *    - in: path
 *      name: agent_code
 *      schema:
 *        type: string
 *      required: true
 *    description: Delete an agent entry via-agent_code
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete('/:agent_code', (req, res) => {
    var agent_code = req.body.AGENT_CODE;
    console.log(agent_code)
    // Connect to the DB
        pool.getConnection().then(conn => {
            // Perform the request that you need (SQL)
            conn.query(`DELETE FROM agents WHERE AGENT_CODE = \"${req.params.agent_code}\";`)
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
});

module.exports = router;