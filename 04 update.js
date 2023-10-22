db.inventory.updateOne(
    { item: "paper" },
    {
      $set: { "size.uom": "cm", status: "P" },
      $currentDate: { lastModified: true }
    }
 )
 db.inventory.findOne({ qty : {$lt : 50} })
 db.inventory.findOne({ qty : {$gt : 25} })


 db.inventory.updateMany( 
    {qty: {$gt :25} },
    {
        $set: {"size.uom":"cm", status: "A"},
        $currentDate : {lastModified: true}    
    })