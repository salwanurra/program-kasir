	var sum = 0;

		
		const numbers = [
			{
				num: 35000,
				desc: 'Cappucino'
			},
			{
				num: 40000,
				desc: 'Green Tea Latte'
			},
			{
				num: 50000,
				desc: 'Fish and Chips'
			},
			{
				num: 45000,
				desc: 'Tuna Sandwich'
			},
			{
				num: 8000,
				desc: 'Mineral Water'
			},
			{
				num: 18000,
				desc: 'French Fries'
			}
		];


		let listNumbers = '<ul id="list-numbers">';
		
		numbers.forEach(function(number) {
			listNumbers += `<li id="${number.num}">${number.desc}<span>Rp ${number.num}</span></li>`;
		});

		listNumbers += '</ul>';

		document.getElementById("container").innerHTML += listNumbers;

		var total = document.getElementById("total");
		document.querySelector("ul").addEventListener("click", function(event){
			
			if(event.target && event.target.matches("li")) {

				
				if(event.target.matches("li.selected")) { 
					document.getElementById(event.target.id).classList.remove("selected");
					sum -= parseInt(event.target.id); 
				} else { 
					document.getElementById(event.target.id).classList.add("selected");
					sum += parseInt(event.target.id); 
				}

				total.innerHTML = "Rp " + sum;
			}
		});