const mongoose = require("mongoose");
const User = require("./02_schema");
// const mongoURI = "mongodb://localhost:27017";
mongoose.connect("mongodb://localhost:27017");
// const connectToMongo = async () => {
// 	try {
// 		mongoose.set("strictQuery", false);
// 		mongoose.connect(mongoURI);
// 		console.log("Mongoose connected");
// 	} catch (error) {
// 		console.log(error);
// 		process.exit();
// 	}
// };
// module.exports = connectToMongo;
run();
async function run() {
	const user = await User.create({ name: "Honey", age: 19 });
	// const user = new User({ name: "Honey", age: 19 });
	await user.save();
	console.log(user);
}
