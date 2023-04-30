// basic things

const express = require("express");
const router = require("./router");
const { errorHandler, logError } = require("./middleware/error.handler");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello");
});

router(app);

app.use(logError);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`server ready http://localhost:${port}/`);
});
