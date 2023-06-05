db.inventory.find().limit(1); // returns the first doc
db.inventory.find().skip(1); // skips the first doc used in designing pagination
db.inventory.find().sort({ qty: 1 }); // sorts in ascending order
db.inventory.find().sort({ qty: -1 }); // sorts in descending order