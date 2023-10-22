db.inventory.find().limit(1) // limit to only one document when fetching data

db.inventory.find().skip(1) // skips one document


db.inventory.find().sort({qty:1}) // Sort in Acending Order

db.inventory.find().sort({qty:-1}) // Sort in Descending Order