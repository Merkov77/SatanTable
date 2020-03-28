const  SatanTable  = require("./brain/satantable");

const db = new SatanTable("database")

//The first object "add" should have each key that go to be used in a new "add"

db.add({
	"Name":"Richard",
	"Age":20,
	"Country":"UK",
	"Sick": "No",
	"Quarantine" : "Yes"
})

db.add({
	"Name":"María G",
	"Age":21,
	"Country":"UK",
	"Sick": "No",
	"Quarantine" : "No"
})

db.add({
	"Name":"Jhon",
	"Age":22,
	"Country":"UK",
	"Sick": "No",
	"Quarantine" : "Yes"
})

db.add({
	"Name":"Luis R",
	"Age":23,
	"Country":"UK",
	"Sick": "Yes",
	"Quarantine" : "Yes"

})

db.save()