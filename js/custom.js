"use strict";

	let addition, subtraction, multiplication, division = true;
	let rand1 = Math.floor((Math.random() * 10) + 1);
    let rand2 = Math.floor((Math.random() * 10) + 1);
    let correctAnswer = rand1 + rand2;
	let output;
	addition = true;
	document.querySelector("#numbers").innerHTML = (rand1 + " + " + rand2);

	document.querySelectorAll("button").forEach(function(el) {
		el.addEventListener("click", function() {
		if (this.id === "addition") {
			addition = true;
			subtraction = false;
			multiplication = false;
			division = false;
			correctAnswer = rand1 + rand2;
			document.querySelector("#flashcardTitle").innerHTML = "Addition Flashcards";
			document.querySelector("#numbers").innerHTML = (rand1 + " + " + rand2);
		} else if (this.id === "subtraction") {
			addition = false;
			subtraction = true;
			multiplication = false;
			division = false;
			correctAnswer = rand1 - rand2;
			document.querySelector("#flashcardTitle").innerHTML = "Subtraction Flashcards";
			document.querySelector("#numbers").innerHTML = (rand1 + " - " + rand2);
		} else if (this.id === "multiplication") {
			addition = false;
			subtraction = false;
			multiplication = true;
			division = false;
			correctAnswer = rand1 * rand2;
			document.querySelector("#flashcardTitle").innerHTML = "Multiplication Flashcards";
			document.querySelector("#numbers").innerHTML = (rand1 + " x " + rand2);
		} else if (this.id === "division") {
			addition = false;
			subtraction = false;
			multiplication = false;
			division = true;
			correctAnswer = rand1 / rand2;
			document.querySelector("#flashcardTitle").innerHTML = "Division Flashcards";
			document.querySelector("#numbers").innerHTML = (rand1 + " &#247; " + rand2);
		}
	});
	});

	document.querySelector("#submitAnswer").addEventListener("click", function() {

        let answer = document.querySelector("#answer").value;

        if (isNaN(answer)) return document.querySelector("#output").innerHTML = "Hey! That's not a number, try again!";

		switch(true) {

		case answer == correctAnswer && addition === true:
			document.querySelector("#output").innerHTML = "Correct! " + rand1 + " + " + rand2 + " = " + correctAnswer + ".";
			break;

		case answer == correctAnswer && subtraction === true:
			document.querySelector("#output").innerHTML = "Correct! " + rand1 + " - " + rand2 + " = " + correctAnswer + ".";
			break;

		case answer == correctAnswer && multiplication === true:
			document.querySelector("#output").innerHTML = "Correct! " + rand1 + " x " + rand2 + " = " + correctAnswer + ".";
			break;

		case answer == correctAnswer && division === true:
			document.querySelector("#output").innerHTML = "Correct! " + rand1 + " &#247; " + rand2 + " = " + correctAnswer + ".";
			break;

		default:
			document.querySelector("#output").innerHTML = "Incorrect answer.";
			break;
		}
	});

	document.querySelector("#nextCard").addEventListener("click", function() {

        document.querySelector("#output").innerHTML = null;      
        document.querySelector("#answer").value = null;
        rand1 = Math.floor((Math.random() * 10) + 1);
        rand2 = Math.floor((Math.random() * 10) + 1);

		if (addition === true) {
        	correctAnswer = rand1 + rand2;
        	document.querySelector("#numbers").innerHTML = (rand1 + " + " + rand2);
		} else if (subtraction === true) {
			correctAnswer = rand1 - rand2;
        	document.querySelector("#numbers").innerHTML = (rand1 + " - " + rand2);
		} else if (multiplication === true) {
			correctAnswer = rand1 * rand2;
        	document.querySelector("#numbers").innerHTML = (rand1 + " x " + rand2);
		} else if (division === true) {
			correctAnswer = rand1 / rand2;
        	document.querySelector("#numbers").innerHTML = (rand1 + " &#247; " + rand2);
		}
	});
