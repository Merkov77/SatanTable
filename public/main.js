let root = document.getElementById("root")

let table = document.createElement("table")
let tbody = document.createElement("tbody")
table.appendChild(tbody)
root.appendChild(table)

table.className += "m-2 border float-left bg-light"

let tr1 = document.createElement("tr")
tbody.appendChild(tr1)

fetch("/api").then(data => data.json())
	.then(data =>{

		let colLength = Object.keys(data[Object.keys(data)[0]][0]).length //number columns
		Object.keys(data[Object.keys(data)[0]][0]).map((e,i) =>{
			// if(i < 13){
				tr1.innerHTML += `<th class="text-center">${Object.keys(data[Object.keys(data)[0]][0])[i]}</th>`
			// }
			})

		data[Object.keys(data)[0]].map((o,i) =>{
			let tr2 = document.createElement("tr")
			tbody.appendChild(tr2)

			let bg = i % 2 ? "#f2f2f2" : "#dddddd";
			Object.values(o).map((e,i)=>{
				// console.log(e)	
				// if (i < 13){
					tr2.innerHTML += `<td style="background:${bg};" class="text-center">${e}</td>`
				// } 
			})
		})
		
	}).catch(e => console.warn("You need add data in the table, add data and use .save()"))


