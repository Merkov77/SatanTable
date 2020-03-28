const path = require("path")
const fs = require("fs")

const express = () => {
	const express = require("express")
	return [express(), express]
}

const config = app => {
	app[0].use('/', app[1].static(path.join(__dirname, "public/")));
}

const postSave = (app, route)=>{
	let r = ""
	app[0].post(route, (req, res, next)=>{
		r = req.body
		let wr = fs.write("/public/database.json",JSON.stringify(r, null, 2), (err)=>{
			err ? err : ""
		})
	})
}

const get = (app, route, data)=>{
	app[0].get(route, (req, res, next)=>{
		if(data !== "" && data !== undefined && data !== null){
			res.sendFile(path.join(__dirname,data))
		} 
	})
}

const run = (app)=>{
	config(app)
	
	let port = 3000
	app[0].listen(port, ()=>{
		console.log("Server on port:", port)
	})
	postSave(app, "/api")

	get(app,"/api", "/db/database.json")

}

run(express())