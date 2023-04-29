const products = require("./products.router");
const router = require("express").Router();

function routerAPI(app) {
	app.use("/api/v1", router);

	router.use("/products", products);
}

module.exports = routerAPI;
