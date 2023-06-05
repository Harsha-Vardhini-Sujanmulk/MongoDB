// To find one document
db.inventory.findOne({ item: "paper" });

// To update one document
db.inventory.updateOne(
	{ item: "paper" },
	{
		$set: { "size.uom": "cm", status: "P" },
		$currentDate: { lastModified: true },
	}
);
// To find all
db.inventory.find({ qty: { $lt: 50 } });

// To update all
db.inventory.updateMany(
	{ qty: { $lt: 50 } },
	{
		$set: { "size.uom": "in", status: "P" },
		$currentDate: { lastModified: true },
	}
);
