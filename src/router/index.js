const products = require("./products.router");

function routerAPI(app) {
	app.use("/products", products);
}

module.exports = routerAPI;
