const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	who: {
		type: Boolean,
	},
});
const User = mongoose.model("users", UserSchema);
User.createIndexes();
