const express = require('express');
const router = express.Router();
const pool = require('../db');

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
 router.get('/', (req, res) => {
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

    module.exports = router;