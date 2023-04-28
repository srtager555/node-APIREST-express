const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello");
});

app.get("/new-route", (req, res) => {
	res.json({
		id: 1,
		name: "iMac",
		price: "1200 USD",
	});
});

app.get("/more-routes", (req, res) => {
	res.send("A new route againt");
});

app.listen(port, () => {
	console.log("?");
});
