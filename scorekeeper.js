const displayplayer1=document.querySelector("#displayer1")
const displayplayer2=document.querySelector("#displayer2")
const player1button=document.querySelector("#player1button")
const player2button=document.querySelector("#player2button")
const resetbutton=document.querySelector("#reset")
const ChangeMatchpoint=document.querySelector("#playto")
let player1=0
let player2=0

let matchpoint=3
let playgame=false

player1button.addEventListener("click",()=>{
	if(!playgame)
	{
		player1++
		if(player1===matchpoint)
		{
			playgame=true
			displayplayer1.classList.add("winner")
			displayplayer2.classList.add("loser")
			player1button.disabled=true
			player2button.disabled=true
		}
	}
	displayplayer1.textContent=player1
})


player2button.addEventListener("click",()=>{
	if(!playgame)
	{
		player2++
		if(player2===matchpoint)
		{
			playgame=true
			displayplayer2.classList.add("winner")
			displayplayer1.classList.add("loser")
			player1button.disabled=true
			player2button.disabled=true
		}
	}
	displayplayer2.textContent=player2
})

function reset(){
	playgame=false
	player1=0
	player2=0
	displayplayer1.textContent=0
	displayplayer2.textContent=0
	displayplayer1.classList.remove("winner","loser")
	displayplayer2.classList.remove("winner","loser")
	player1button.disabled=false
	player2button.disabled=false
}
resetbutton.addEventListener("click",reset)

  ChangeMatchpoint.addEventListener("change",function(){
 	matchpoint=parseInt(this.value)
 	reset()
 })
 

