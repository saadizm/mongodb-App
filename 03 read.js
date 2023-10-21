db.faculty.find()   // list all the documents of the databases
db.faculty.find({}) // Query all documents from the databases

db.faculty.find({name: "Ghulam Abbas"}) // find the document in the collection whose name is => Ghulam Abbas

db.faculty.find({ name: { $in: ['Ghulam Abbas',"Laraib Sana"] } } ) 

// Retrieves all documents in the inventory collection where the status equals "A" and qty is less than ($lt) 30:
db.inventory.find( {status : "A", qty : { $lt: 30}}) 

// Retrieves those documents in the inventory collection where the status equals "A" or qty is less than ($lt) 30
db.inventory.find( {$or: [  { status : "A" } , { qty : { $lt: 30 } } ] } )

//  the compound query document selects all documents in the collection where the status equals "A" and either qty is less than ($lt) 30 or item starts with the character p
db.inventory.find( {
    status : "A",
    $or : [ {qty : {$lt:30} }, {item : "/^p/" }]
 }
)