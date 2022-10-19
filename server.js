if (
	process.env.NODE_ENV !== "production" &&
	process.env.TESTING_PRODUCTION_ENV !== "true"
) {
	// Update and load .env file
	require("dotenv").config();
}

//Dependencies
const express = require("express");
require("express-async-errors");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

//Connect Database
void connectDB();

//Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Route Index
app.use("/api/");

app.get("/", (req, res) => {
	res.send(`<div><h1>This is the AdmitONE Api</h1></div>`);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
	console.log(
		`Server started in ${process.env.NODE_ENV} mode on Port: ${PORT}`
	)
);
