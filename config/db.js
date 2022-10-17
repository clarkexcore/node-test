const mongoose = require("mongoose");

// Throws errors instead of returning all results when an invalid field is provided
mongoose.set("strict", "throw");

// MongoDB Connection
const uri = process.env.ATLAS_URI;

const connectDB = async () => {
	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("MongoDB Connected");
	} catch (err) {
		console.error(err.message);
		//Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;
