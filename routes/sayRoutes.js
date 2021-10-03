const express = require('express');
const axios = require('axios');
const querystring = require('querystring')
const router = express.Router();


/**
 * @swagger
 * /say:
 *  get:
 *    summary: Make me say something!
 *    parameters:
 *    - in: query
 *      name: keyword
 *      schema:
 *        type: string
 *      required: true
 *    description: Enter message you would like to say
 *    responses:
 *      '200':
 *        description: Successfully communicated with AWS Lambda
 */
 router.get('/', (req, res) => {
    const keyword = req.query.keyword;
    const awsApi = "https://u5gwzemtjb.execute-api.us-east-2.amazonaws.com/say?requestParam=" + keyword;
    console.log(keyword);
    axios.get(awsApi)
    .then((response) => {
        res.send(response.data);
      }, (error) => {
        res.send(error);
      });
});

    module.exports = router;