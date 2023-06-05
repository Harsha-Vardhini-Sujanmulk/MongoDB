// inserts a single document
db.inventory.insertOne({
	item: "paper",
	qty: 100,
	tags: ["cotton"],
	size: { h: 28, w: 35.5, uom: "cm" },
});
// tags is an array
// size is a javascript object
// Inserts multiple documents
db.inventory.insertMany([
	{
		item: "journal",
		qty: 25,
		tags: ["blank", "red"],
		size: { h: 14, w: 21, uom: "cm" },
	},
	{
		item: "mat",
		qty: 85,
		tags: ["gray"],
		size: { h: 27.9, w: 35.5, uom: "cm" },
	},
	{
		item: "mousepad",
		qty: 25,
		tags: ["gel", "blue"],
		size: { h: 19, w: 22.85, uom: "cm" },
	},
]);

db.inventory.find(); // fetch all documents i.e.rows in sql
db.inventory.find({}); // fetch all documents i.e.rows in sql
db.inventory.find({ qty: 90 });
db.inventory.find({ tags: { $in: ["red", "D"] } });
