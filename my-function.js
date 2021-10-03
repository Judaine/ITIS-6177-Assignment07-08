//AWS Lambda function, called helloFunction in AWS.

exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('David Jordan says ' + event["queryStringParameters"]['requestParam']),
    };
    return response;
};
