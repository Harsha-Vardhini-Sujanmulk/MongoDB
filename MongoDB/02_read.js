db.inventory.find();
db.inventory.find({});
db.inventory.find({ status: "A", qty: { $lt: 30 } }); // AND
db.inventory.find({ $or: [{ status: "A" }, { qty: { $lt: 30 } }] }); // OR
db.inventory.find({
	status: "A",
	$or: [{ qty: { $lt: 30 } }, { item: /^p/ }],
}); // AND OR
