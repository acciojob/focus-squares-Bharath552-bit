//your JS code here. If required.
	const squares=document.querySelectorAll(".square")
	squares.forEach((hoveredsquare)=>{
		hoveredsquare.addEventListener('mouseover',()=>{
			squares.forEach(square=>{
				if(square!==hoveredsquare){
					square.style.backgroundColor="#6F4E37"
				}
			})
		})
		hoveredsquare.addEventListener('mouseout',()=>{
			squares.forEach(square=>{
					square.style.backgroundColor="#E6E6FA"
			})
		})
		
	})
	
