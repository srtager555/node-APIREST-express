// basic things

const express = require("express");
const router = require("./router");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello");
});

router(app);

app.listen(port, () => {
	console.log(`server ready http://localhost:${port}/`);
});
