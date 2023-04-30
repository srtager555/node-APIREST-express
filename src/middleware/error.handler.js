function logError(err, req, res, next) {
	console.log(err);
	next(err);
}

function errorHandler(err, req, res, next) {
	res.status(500).json({
		message: err.message,
		stact: err.stack,
	});
}

module.exports = { logError, errorHandler };
