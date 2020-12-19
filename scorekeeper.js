const player1={
	score:0,
	display:document.querySelector("#displayer1"),
	button:document.querySelector("#player1button")
}

const player2={
	score:0,
	display:document.querySelector("#displayer2"),
	button:document.querySelector("#player2button")
}

function UpdateScores(player,opponent)
{
	if(!playgame)
	{
		player.score++
		if(player.score===matchpoint)
		{
			playgame=true
			player.display.classList.add("winner")
			opponent.display.classList.add("loser")
			player.button.disabled=true
			opponent.button.disabled=true
		}
	}
	player.display.textContent=player.score
}



const resetbutton=document.querySelector("#reset")
const ChangeMatchpoint=document.querySelector("#playto")


let matchpoint=3
let playgame=false

player1.button.addEventListener("click",()=>{
	UpdateScores(player1,player2)
})


player2.button.addEventListener("click",()=>{
	UpdateScores(player2,player1)
})

function reset(){
	playgame=false
	for(let player of [player1,player2])
	{
		player.score=0
	player.display.textContent=0
	player.display.classList.remove("winner","loser")
	player.button.disabled=false
	
	}
	
}
resetbutton.addEventListener("click",reset)

  ChangeMatchpoint.addEventListener("change",function(){
 	matchpoint=parseInt(this.value)
 	reset()
 })
