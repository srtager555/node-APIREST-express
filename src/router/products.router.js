const express = require("express");

const ProductsService = require("./../services/product.service");
const validatorHandler = require("./../middleware/validator.handler");

const {
	getProductSchema,
	updateProductSchema,
	createProductSchema,
} = require("../schema/product.schema");

const router = express.Router();
const service = new ProductsService();

router.get("/", async (req, res) => {
	const products = await service.find();

	res.json(products);
});

router.get("/filter", async (req, res) => {
	res.send("Yo soy un filter");
});

router.get("/:id", validatorHandler(getProductSchema, "params"), async (req, res) => {
	const { id } = req.params;
	const product = await service.findOne(id);

	res.json(product);
});

router.post("/", validatorHandler(createProductSchema, "body"), async (req, res) => {
	const body = req.body;
	const newProduct = await service.create(body);

	res.status(201).json(newProduct);
});

router.patch(
	"/:id",
	validatorHandler(getProductSchema, "params"),
	validatorHandler(updateProductSchema, "body"),
	async (req, res) => {
		try {
			const { id } = req.params;
			const body = req.body;
			const product = await service.update(id, body);

			res.json(product);
		} catch (error) {
			res.status(404).json({
				message: error.message,
			});
		}
	}
);

router.delete("/:id", async (req, res) => {
	const { id } = req.params;
	const rta = await service.delete(id);

	res.json(rta);
});

module.exports = router;
