const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
	{
		showclix_id: {
			type: Number,
			required: true,
			unique: true,
		},
		venue_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Venue",
		},
		age_limit: {
			type: Boolean,
			default: false,
		},
		age_limit_number: {
			type: Number,
			default: null,
		},
		venue: {
			name: {
				type: String,
				default: null,
			},
			city: {
				type: String,
				default: null,
			},
			region: {
				type: String,
				default: null,
			},
			location: {
				type: {
					type: String, // Don't do `{ location: { type: String } }`
					enum: ["Point"], // 'location.type' must be 'Point'
					required: true,
				},
				coordinates: {
					type: [Number],
					required: true,
				},
			},
		},
		venue_name: {
			type: String,
			default: null,
		},
		venue_city: {
			type: String,
			default: null,
		},
		seller_id: {
			type: Number,
		},
		admitone_title: {
			type: String,
			default: null,
			trim: true,
		},
		title: {
			type: String,
			default: null,
			trim: true,
		},
		short_name: {
			type: String,
			default: null,
			trim: true,
		},
		description: {
			type: String,
			default: null,
		},
		admitone_image_url: {
			type: String,
			default: null,
		},
		thumbnail_image_url: {
			type: String,
			default: null,
		},
		image_url: {
			type: String,
			default: null,
		},
		status: {
			type: Number,
			default: null,
		},
		hidden: {
			type: Boolean,
			default: false,
		},
		hidden_until: {
			type: Date,
			default: null,
		},
		featured: {
			type: Boolean,
			default: false,
		},
		carousel: {
			type: Boolean,
			default: false,
		},
		carousel_image_url: {
			type: String,
			default: null,
		},
		carousel_link_to: {
			type: String,
			default: null,
		},
		promoters: [
			{
				promoter_name: {
					type: String,
				},
				promoter_link: {
					type: String,
				},
			},
		],
		promoter: {
			type: String,
			default: null,
		},
		promoter_link: {
			type: String,
			default: null,
		},
		front_end_genres: [
			{
				value: {
					type: String,
				},
				label: {
					type: String,
				},
			},
		],
		internal_genres: [
			{
				value: {
					type: String,
				},
				label: {
					type: String,
				},
			},
		],
		artists: [
			{
				artist: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Artist",
				},
			},
		],
		secondary_artists: [
			{
				artist: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Artist",
				},
			},
		],
		sales_open: {
			type: Date,
			default: null,
		},
		event_door_time: {
			type: Date,
			default: null,
		},
		event_start: {
			type: Date,
			default: null,
		},
		event_time_start: {
			type: String,
			default: null,
		},
		event_time_end: {
			type: String,
			default: null,
		},
		redirect: {
			type: Boolean,
			default: false,
		},
		provider: {
			type: String,
			default: null,
		},
		tour_name: {
			type: String,
			default: null,
		},
		ticket_evolution: {
			configuration_id: {
				type: String,
				default: null,
			},
			configuration_name: {
				type: String,
				default: null,
			},
			venue_id: {
				type: String,
				default: null,
			},
		},
		layaway: {
			type: Boolean,
			default: false,
		},
		fb_pixel_id: {
			type: String,
			default: null,
		},
		tiktok_pixel_id: {
			type: String,
			default: null,
		},
		twitter_pixel_id: {
			type: String,
			default: null,
		},
		snapchat_pixel_id: {
			type: String,
			default: null,
		},
		pinterest_pixel_id: {
			type: String,
			default: null,
		},
		sold_out: {
			type: Boolean,
			default: false,
		},
		promotions: {
			on_sale: {
				type: Boolean,
				default: false,
			},
			discount: {
				type: String,
				default: null,
			},
			promo_code: {
				type: String,
				default: null,
			},
			discount_until: {
				type: String,
				default: null,
			},
			discount_start: {
				type: String,
				default: null,
			},
		},
		searchable_tags: [],
		banner_tall: {
			type: String,
			default: null,
		},
		product_levels: [],
		ticket_range: {
			type: String,
			default: null,
		},
	},
	{
		timestamps: true,
	}
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
