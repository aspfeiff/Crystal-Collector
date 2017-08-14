$(document).ready(function(){
	//choose random number between 19-120
	var number= Math.floor(Math.random()*101+19)
	//add number to randomNumber id
	$("#randomNumber").text(number);

	//Create variables for numbers to go on crystals
	//random number between 1-12
	var crystal1=Math.floor(Math.random()*11+1)
	var crystal2=Math.floor(Math.random()*11+1)
	var crystal3=Math.floor(Math.random()*11+1)
	var crystal4=Math.floor(Math.random()*11+1)


console.log(number)
console.log(crystal1)
console.log(crystal2)
console.log(crystal3)
console.log(crystal4)

//Create variables to track sum of crystals, wins, and losses

var sum=0;
var wins=0;
var losses=0;

$("#userWins").text(wins);
$("#userLosses").text(losses);

//reset function

function reset() {
	//choose new random number
	number= Math.floor(Math.random()*101+19);
	//log new number
	console.log(number)
	//add new number to randomNumber id
	$("#randomNumber").text(number);
	//choose new random numbers for crystals
	crystal1=Math.floor(Math.random()*11+1);
	crystal2=Math.floor(Math.random()*11+1);
	crystal3=Math.floor(Math.random()*11+1);
	crystal4=Math.floor(Math.random()*11+1);
	//log new values
	console.log(crystal1)
	console.log(crystal2)
	console.log(crystal3)
	console.log(crystal4)
	//reset sum of crystals to zero
	sum=0;
	//add "sum" to total id
	$("#total").text(sum);


}

//show crystal values when clicked
$("#crystal1").click(function() {
		sum= sum + crystal1;
		$("#total").text(sum);

		if(sum===number) {
			winner();
		}

		else if (sum > number) {
			lose();
		}
});

$("#crystal2").click(function() {
		sum= sum + crystal2;
		$("#total").text(sum);

		if(sum===number) {
			winner();
		}

		else if (sum > number) {
			lose();
		}
});

$("#crystal3").click(function() {
		sum= sum + crystal3;
		$("#total").text(sum);

		if(sum===number) {
			winner();
		}

		else if (sum > number) {
			lose();
		}
});

$("#crystal4").click(function() {
		sum= sum + crystal4;
		$("#total").text(sum);

		if(sum===number) {
			winner();
		}

		else if (sum > number) {
			lose();
		}
});

//counts wins
function winner(){
	alert("You Win!");
	wins++;
	$("#userWins").text(wins);
	reset();
}

//count losses
function lose(){
	alert("You Lose!");
	losses++;
	$("#userLosses").text(losses);
	reset();
}

});

