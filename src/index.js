// basic things

const express = require("express");
const app = express();
const port = 3000;

const products = [
	{
		id: 1,
		name: "iMac",
		price: "2400 USD",
	},
	{
		id: 2,
		name: "iPhone",
		price: "1000 USD",
	},
	{
		id: 3,
		name: "AppleWatch",
		price: "700 USD",
	},
	{
		id: 4,
		name: "iPad",
		price: "1200 USD",
	},
];

app.get("/", (req, res) => {
	res.send("Hello");
});

app.get("/products", (req, res) => {
	res.json(products);
});

app.get("/products/:id", (req, res) => {
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

app.get("/more-routes", (req, res) => {
	res.send("A new route againt");
});

app.listen(port, () => {
	console.log(`server ready http://localhost:${port}/`);
});
