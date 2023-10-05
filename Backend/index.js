const express = require("express");
const cors = require("cors");
const bparcer = require("body-parser");
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/portal");
	console.log("connected to portal db");
}

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	who: String,
});

const Portal = mongoose.model("portal", userSchema);

const server = express();
server.use(cors());
server.use(bparcer.json());

server.post("/signup", async (req, res) => {
	const user = new Portal();
	user.name = req.body.name;
	user.email = req.body.email;
	user.who = req.body.who;
	const doc = await user.save();
	console.log(doc);
	res.json(doc);
});
server.listen(8080, () => {
	console.log("connected successfully");
});
