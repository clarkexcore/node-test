const express = require("express");
const router = express.Router();
const Event = require("./models/events");

router.get("/events", async (req, res) => {
	try {
		const date = new Date();
		const events = await Event.find({
			event_start: { $gte: date },
			$or: [{ status: 5 }, { status: 7 }],
			hidden: false,
			hidden_until: { $lte: date },
		})
			.sort({ event_start: 1 })
			.exec();

		res.status(404).send(events);
	} catch (error) {
		console.error(error);
		res.status(200).send(error);
	}
});

module.exports = router;
