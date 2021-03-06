$(document).ready(function(){
	/* Styling when buttons are hovered */
	$(".select").hover(function() {
		$(this).css("filter", "opacity(70%)");
		$(this).css("transition","filter 0.4s");
	}, function() {
		$(this).css("filter", "none");
		$(this).css("transition","filter 0.4s");
	});
	
	/* Variables for calculator and easter egg */
	var itemCounter = 0;
	var moneyCounter = 0.00;
	var secret = 0;
	
	/* Increments the amount of items */
	$(".select").click(function() {	
		itemCounter++;
		$("#itemCounter").text(itemCounter);
		
		
	/* Changes the recycling bin based on item amount */
	if (itemCounter == 10) {
		$("#bin").attr("src", "./Images/recycling-bin-1.png");
	} else if (itemCounter == 20) {
		$("#bin").attr("src", "./Images/recycling-bin-2.png");
	} else if (itemCounter == 30) {
		$("#bin").attr("src", "./Images/recycling-bin-3.png");
	}
	});
	
	/* Increments refund value based on button clicked.
		Will also advance the easter egg variable when button is clicked in correct sequence. */
	$("#aluminum").click(function() {
		moneyCounter = moneyCounter + 0.05;
		$("#moneyCounter").text("$" + Number.parseFloat(moneyCounter).toFixed(2));
		if (secret == 6) {
			secret++;
		}
	});
	
	$("#plastic").click(function() {
		moneyCounter = moneyCounter + 0.05;
		$("#moneyCounter").text("$" + Number.parseFloat(moneyCounter).toFixed(2));
		if (secret == 0) {
			secret++;
		}
	});
	
	$("#drinkBox").click(function() {
		moneyCounter = moneyCounter + 0.05;
		$("#moneyCounter").text("$" + Number.parseFloat(moneyCounter).toFixed(2));
		if (secret == 1) {
			secret++;
		}
	});
	
	$("#gableTop").click(function() {
		moneyCounter = moneyCounter + 0.05;
		$("#moneyCounter").text("$" + Number.parseFloat(moneyCounter).toFixed(2));
	});
	
	$("#glass").click(function() {
		moneyCounter = moneyCounter + 0.05;
		$("#moneyCounter").text("$" + Number.parseFloat(moneyCounter).toFixed(2));
		if (secret == 4) {
			secret++;
		}
	});
	
	$("#biMetal").click(function() {
		moneyCounter = moneyCounter + 0.05;
		$("#moneyCounter").text("$" + Number.parseFloat(moneyCounter).toFixed(2));
		if (secret == 7) {
			$("#bin").attr("src", "./Images/EasterEgg.png");
		}
	});
	
	$("#pouch").click(function() {
		moneyCounter = moneyCounter + 0.05;
		$("#moneyCounter").text("$" + Number.parseFloat(moneyCounter).toFixed(2));
	});
	
	$("#pCup").click(function() {
		moneyCounter = moneyCounter + 0.05;
		$("#moneyCounter").text("$" + Number.parseFloat(moneyCounter).toFixed(2));
		if (secret == 5) {
			secret++;
		}
	});
	
	$("#waterBox").click(function() {
		moneyCounter = moneyCounter + 0.20;
		$("#moneyCounter").text("$" + Number.parseFloat(moneyCounter).toFixed(2));
	});

	$("#liqPlastic").click(function() {
		moneyCounter = moneyCounter + 0.10;
		$("#moneyCounter").text("$" + Number.parseFloat(moneyCounter).toFixed(2));
		if (secret == 2) {
			secret++;
		}
	});
	
	$("#liqGlass").click(function() {
		moneyCounter = moneyCounter + 0.10;
		$("#moneyCounter").text("$" + Number.parseFloat(moneyCounter).toFixed(2));
		if (secret == 3) {
			secret++;
		}
	});
	
	$("#liqBox").click(function() {
		moneyCounter = moneyCounter + 0.20;
		$("#moneyCounter").text("$" + Number.parseFloat(moneyCounter).toFixed(2));
	});
});