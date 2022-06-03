exports.register = (request, response) => {
    response.status(200).json({status: "Success", data: "Hello World!"});
}