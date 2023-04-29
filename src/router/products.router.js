const router = require("express").Router();
const { faker } = require("@faker-js/faker");

const products = [
	{
		id: -1,
		name: faker.commerce.productName(),
		price: parseInt(faker.commerce.price(), 10),
		image: faker.image.imageUrl(),
	},
];
for (let index = 0; index < 100; index++) {
	products.push({
		id: index,
		name: faker.commerce.productName(),
		price: parseInt(faker.commerce.price(), 10),
		image: faker.image.food(),
	});
}

router.get("/", (req, res) => {
	res.json(products);
});

router.post("/", (req, res) => {
	const b = req.body;

	res.json({
		message: "Creating...",
		data: b,
	});
});

router.get("/more-routes", (req, res) => {
	res.send("A new route againt");
});

router.get("/:id", (req, res) => {
	const { id } = req.params;
	const { color } = req.query;

	if (typeof id === "undefined") {
		res.json("not found " + id);
	} else {
		const product = products.find((el) => el.id === Number(id));
		if (product) res.json({ product, color });
		else res.json("not found " + id);
	}
});

router.patch("/:id", (req, res) => {
	const { id } = req.params;
	const b = req.body;

	res.json({
		message: "updated",
		id,
		b,
	});
});

router.delete("/:id", (req, res) => {
	const { id } = req.params;

	res.json({
		message: "deleted",
		id,
	});
});

module.exports = { router };
