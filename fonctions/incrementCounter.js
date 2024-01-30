let counter = 0;

exports.handler = async (event, context) => {
    // Increment the counter
    counter++;

    return {
        statusCode: 200,
        body: JSON.stringify({ count: counter }),
    };
};
