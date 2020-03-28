const fs = require("fs")
const chalk = require("chalk")

class SatanTable{
	constructor(name){
		this.countAdds = 0
		this.alma = []
		this.name = name
		this.table = {
			[this.name] : [] 
		}
		const sv = fs.writeFile("./db/"+this.name+".json", JSON.stringify(this.table, null, 2), err =>{
			if (err) throw err;
		})
	}

	add = object => {
		this.countAdds += 1

		this.alma.push(Object.keys(object).length)
			
		this.alma.sort((a,b)=>b-b)

		if (this.alma[this.countAdds-1] !== this.alma[0]){
			console.log(chalk.yellow("There is a conflict due to the fact that you have differents keys defined in two or more .add"))
		} else {
			this.table[Object.keys(this.table)].push(object) 
			console.log(this.alma[this.countAdds-1])
		}


		// console.log(this.alma[this.countAdds-1])
	}

	save = name => {
		// console.log(this.table)
		const sv = fs.writeFile("./db/"+this.name+".json", JSON.stringify(this.table, null, 2), err =>{
			if (err) throw err;
		})
	}	
}

module.exports = SatanTable;
