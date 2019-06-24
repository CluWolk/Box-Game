/* MIT License

Copyright (c) 2019 Claudia Leimhofer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */



//------------------------ database -------------------------------------------
//easy
var gameE0 = [1,2,0,-2,-1];
var gameE1 = [-2,-1,0,-3,-1,0,1,2,0,3,2,0,1];//unsat
var gameE2 = [-1,-2,0,1,-2,0,-1,3,0,2,-3];
//normal
var gameN0 = [-2,3,5,0,1,2,6,0,1,2,-5,0,-1,3,6,0,-1,5,-6,0,1,-4,5,0,3,5,6,0,-2,-4,6,0,-3,-4,6,0,-3,5,6,0,1,-2,3,0,-3,5,-6,0,1,2,-6,0,-1,-4,5,0,1,3,4,0,-3,4,-6,0,2,-5,6,0,-2,-3,6];
var gameN1 = [1,2,4,0,-1,2,4,0,-1,2,-4,3,0,1,2,-4,0,3,0,-3,-2,0,3,-4,6,5,0,-1,2,-4]; //unsat
var gameN2 = [2,-4,5,0,1,-2,-4,0,1,3,-5,0,1,3,-4,0,-1,-3,4,0,-2,-3,4,0,2,4,5,0,1,3,5,0,-2,3,-5,0,-3,4,-5,0,2,3,-4,0,1,-4,5,0,1,4,5,0,3,4,5,0,1,-2,5];
var gameN3 = [1,-2,3,0,3,4,-5,0,2,3,-5,0,-1,2,-5,0,2,-4,5,0,-1,4,5,0,-2,3,-5,0,3,-4,5,0,1,2,3,0,-3,4,-5,0,1,3,5,0,2,-4,-5,0,2,3,5,0,1,3,-4,0,-2,-3,5,0,3,4,5,0,-2,3,4,0,-1,-2,4,0,-1,3,4,0,-1,4,-5];
var gameN4 = [-1,-2,6,0,-2,-3,-7,0,3,-4,-6,0,2,3,-4,0,-1,-4,-7,0,2,3,-6,0,3,-4,7,0,-1,2,-5,0,-1,4,5,0,2,3,4,0,1,-2,5,0,3,-4,-7,0,1,-6,-7,0,2,-3,-6];
var gameN5 = [1,-2,-5,0,-1,2,-3,0,4,5,-7,0,-3,-6,-7,0,1,-5,6,0,-1,4,-7,0,-1,-5,6,0,-1,-5,7,0,-3,6,7,0,-4,-5,6,0,-4,-5,-7,0,-1,3,-7,0,3,5,6,0,-1,2,7];
var gameN6 = [3,-4,7,0,-1,3,4,0,-1,2,-7,0,1,2,6,0,-1,3,7,0,3,4,-6,0,-2,4,6,0,-1,2,6,0,-2,4,-5,0,-3,4,5,0,-3,4,7,0,1,2,4,0,1,-2,5,0,1,4,5];
var gameN7 = [1,-2,4,0,1,-2,-5,0,4,-6,7,0,-3,4,-7,0,-1,-2,-7,0,2,4,7,0,-3,5,6,0,1,4,-6,0,2,3,-5,0,2,5,-7,0,-1,-5,-7,0,2,5,-6,0,1,2,6,0,-3,-4,6];
var gameN8 = [1,2,3,0,1,-4,7,0,2,5,7,0,1,-3,4,0,-4,-5,7,0,2,4,-5,0,-3,6,-7,0,1,-5,6,0,1,-2,5,0,-1,-2,-5,0,-2,-3,-6,0,1,-3,-6,0,-1,-5,7,0,-2,-4,-6];
var gameN9 = [2,4,-6,0,-2,3,5,0,-1,-2,5,0,3,-4,5,0,-1,-3,6,0,1,-2,-6,0,-1,-4,6,0,-1,2,-3,0,1,2,6,0,-1,2,4,0,1,2,-5,0,-1,4,-6,0,-1,-3,4,0,-2,4,-5,0,1,5,-6,0,1,2,-3,0,1,-4,6,0,3,4,-5];
var gameN10 = [2,4,-5,0,4,5,-6,0,2,5,-6,0,-1,2,-6,0,-1,2,-4,0,-1,2,4,0,-2,5,6,0,-4,-5,6,0,3,4,6,0,-2,-4,5,0,2,-3,-4,0,-3,5,6,0,-1,3,6,0,-1,-4,6,0,1,3,5,0,1,2,-4,0,-1,4,-5,0,-1,-2,-5];
var gameN11 = [2,-3,4,0,-1,2,-6,0,-4,5,6,0,-1,-4,-6,0,2,3,4,0,-2,-4,-6,0,2,3,-6,0,2,4,5,0,-2,-4,-5,0,-1,-4,-5,0,-2,3,-5,0,-2,-5,-6,0,1,5,-6,0,3,-5,6,0,1,2,-3,0,4,5,-6,0,-3,4,-5,0,1,-5,-6];
//hard
var gameH0 = [-1,-6,-10,0,1,4,-6,0,4,-5,-6,0,3,4,8,0,-2,3,6,0,-4,-5,-7,0,-3,8,-9,0,-1,-2,-8,0,2,7,-10,0,2,7,-8,0,3,8,10,0,-1,4,5,0,1,5,10,0,3,7,10,0,-2,5,7,0,1,-9,-10,0,-3,6,-10,0,-3,4,-10,0,3,4,5,0,3,-4,-6,0,-3,-7,-8,0,-3,4,5,0,-2,-7,9,0,2,3,-6,0,-1,-4,-10,0,-4,5,-6,0,4,-7,-10,0,7,9,-10,0,2,3,-5,0,-1,8,9,0,-2,6,9,0,2,-3,6,0,1,2,-6,0,-4,6,-8,0,-1,2,8,0,-2,-7,10,0,3,-8,-10,0,-3,-4,-8,0,-6,-9,10,0,5,6,10];
var gameH1 = [-1,-5,9,0,1,-5,6,0,5,-8,-10,0,-2,4,-6,0,5,-6,8,0,4,-7,-9,0,2,-7,-10,0,4,-9,10,0,4,-5,-6,0,-1,4,-7,0,-1,-6,-8,0,4,-6,-7,0,3,5,-6,0,-1,-2,9,0,3,-7,-10,0,3,-4,6,0,2,-6,8,0,5,-7,-9,0,-5,6,10,0,1,5,7,0,-1,-3,-10,0,-3,8,9,0,-6,-8,-10,0,-4,5,6,0,-2,-8,-9,0,2,-7,10,0,3,-9,10,0,6,8,10,0,-8,9,10,0,-3,7,-9,0,2,4,-9,0,2,-4,8,0,-1,7,9,0,-2,6,9,0,1,7,-10,0,-1,3,6,0,-3,4,-10,0,6,9,-10,0,-1,3,7,0,2,5,8];
var gameH2 = [-3,-7,9,0,-5,7,10,0,1,2,-5,0,-5,-9,10,0,2,-3,8,0,-4,7,-9,0,-1,7,9,0,-4,5,6,0,-4,9,-10,0,-2,-8,9,0,-1,-5,-10,0,-2,3,10,0,-2,8,9,0,-4,6,7,0,1,2,-9,0,1,-2,-5,0,-2,-3,-7,0,-2,-7,8,0,7,8,-9,0,-5,9,10,0,2,3,-10,0,2,3,-6,0,-2,5,-7,0,1,6,-10,0,4,6,7,0,-5,9,-10,0,-1,3,-8,0,8,-9,10,0,5,7,9,0,-3,-4,-7,0,-2,3,8,0,1,7,8,0,-1,-4,-6,0,-2,3,-7,0,4,7,10,0,2,-3,7,0,-3,4,-6,0,4,-7,-8,0,2,-3,-5,0,3,-5,-6];
var gameH3 = [-3,5,6,0,4,-7,10,0,1,-4,-6,0,5,-8,10,0,4,8,-10,0,4,7,-8,0,3,5,-10,0,1,4,8,0,-2,6,10,0,-3,8,-10,0,6,-7,8,0,6,-9,10,0,-2,3,10,0,1,8,9,0,2,-3,-9,0,-1,-6,-9,0,4,6,7,0,2,6,-9,0,3,9,10,0,-7,8,-10,0,5,-7,8,0,-3,-5,-7,0,1,-2,8,0,-1,4,-7,0,2,8,-9,0,-2,-6,9,0,4,5,10,0,1,-6,-9,0,3,-8,9,0,-3,-4,-10,0,2,-7,-8,0,3,5,9,0,-3,6,7,0,-5,-9,-10,0,-6,7,9,0,4,-7,9,0,2,4,5,0,5,-7,-8,0,-2,-7,10,0,4,-6,-7];
var gameH4 = [-4,6,10,0,2,-6,-8,0,5,6,8,0,-1,5,7,0,2,-4,9,0,-1,8,-9,0,-2,-7,10,0,-3,-5,-7,0,-4,8,9,0,-3,4,-8,0,1,7,10,0,2,3,-10,0,-1,-5,8,0,-2,5,-7,0,-5,-7,9,0,3,9,-10,0,5,6,10,0,4,5,7,0,-5,-8,-9,0,-1,4,5,0,-2,-4,9,0,1,-5,-6,0,-1,6,8,0,-3,7,-9,0,2,-3,5,0,-3,6,7,0,6,8,9,0,-3,4,8,0,1,7,8,0,6,7,-8,0,1,8,10,0,-3,4,5,0,3,5,-7,0,-6,9,-10,0,1,-4,7,0,1,-5,8,0,1,-6,-9,0,-4,6,-8,0,1,5,7,0,-5,-7,10];
var gameH5 = [1,3,9,0,5,-6,-7,0,1,5,-9,0,-2,5,-7,0,4,7,-8,0,3,8,10,0,1,6,-9,0,-2,-5,8,0,2,6,9,0,2,-4,7,0,3,-8,9,0,2,3,7,0,1,6,9,0,-1,2,-10,0,-3,6,10,0,-2,-5,7,0,-5,8,10,0,-2,-3,4,0,4,-7,-10,0,5,7,-8,0,-4,9,-10,0,-6,7,10,0,1,-4,-9,0,6,-8,-10,0,-2,6,-10,0,-6,8,10,0,-1,-6,-8,0,-4,-6,9,0,-2,3,-5,0,-1,9,10,0,-2,4,-8,0,4,-6,8,0,1,-3,-9,0,-5,8,9,0,1,3,-6,0,-1,5,-7,0,1,-3,6,0,1,-2,-10,0,-1,5,8,0,-2,-6,-10];
var gameH6 = [3,-8,-10,0,-2,-3,4,0,5,8,-9,0,-4,-6,-8,0,1,3,7,0,-3,-8,9,0,2,5,-9,0,1,3,-9,0,-4,6,-10,0,-2,3,-8,0,3,-5,-7,0,1,5,7,0,-2,3,4,0,3,4,-9,0,-1,-9,-10,0,-1,2,3,0,1,6,-9,0,2,-6,7,0,-3,5,10,0,-1,-7,10,0,-4,-8,10,0,-2,-6,-7,0,2,-6,-9,0,1,2,-3,0,-5,-6,-7,0,3,-4,-10,0,-3,4,6,0,1,-5,-8,0,-4,-6,7,0,5,6,-7,0,4,6,-10,0,1,-9,10,0,1,-2,4,0,4,-5,-8,0,-1,-2,3,0,-3,-7,8,0,4,5,-6,0,-1,-6,10,0,-1,8,9,0,6,-7,8];
var gameH7 = [-1,-4,-7,0,-2,3,8,0,4,-5,-6,0,-7,-8,-9,0,5,-6,-8,0,1,7,-10,0,-3,-6,-9,0,3,-6,10,0,1,-3,6,0,-2,8,-9,0,3,-5,8,0,-3,4,7,0,-1,-3,9,0,-1,-8,-9,0,5,-8,-9,0,-1,-2,-10,0,2,4,8,0,-3,-7,8,0,3,-5,-8,0,-2,6,10,0,-6,8,-9,0,3,4,6,0,1,8,-10,0,2,7,-8,0,4,-8,-10,0,-1,-5,-6,0,-2,-5,-9,0,1,-8,-9,0,-5,6,-9,0,-3,7,9,0,2,3,7,0,3,-4,-8,0,5,-6,8,0,-3,5,8,0,-1,-6,-9,0,-1,3,4,0,-2,3,4,0,2,-3,-5,0,-4,-6,-10,0,2,3,6];
var gameH8 = [1,-8,10,0,-4,8,9,0,-3,-8,-9,0,-1,-2,-10,0,1,5,-6,0,-4,-5,6,0,-7,-8,10,0,-5,7,9,0,-3,-7,8,0,4,7,8,0,-1,4,-5,0,-3,7,-9,0,-4,-7,9,0,3,9,-10,0,4,-5,-7,0,1,-5,-6,0,-5,8,-9,0,3,-4,7,0,5,-6,8,0,2,5,10,0,1,-2,5,0,4,7,-9,0,-3,-6,-10,0,3,-5,7,0,1,-2,-3,0,-6,-7,-10,0,-3,-5,10,0,1,9,-10,0,1,5,-8,0,3,-6,7,0,-2,-7,-8,0,2,-5,-7,0,-4,-9,-10,0,1,-3,-7,0,-2,-3,-8,0,2,3,6,0,4,6,10,0,2,4,-6,0,-3,5,-10,0,1,7,9];
var gameH9 = [3,4,7,0,5,7,10,0,-5,-6,9,0,-1,-6,-7,0,1,3,-10,0,6,8,9,0,-3,-5,-7,0,5,6,-8,0,-2,4,-5,0,4,5,8,0,1,9,-10,0,3,6,9,0,2,-6,7,0,2,3,-4,0,-7,-9,10,0,-5,7,8,0,3,7,-10,0,7,-8,9,0,-2,4,5,0,1,2,9,0,5,-6,-10,0,1,2,3,0,-1,8,9,0,-7,-8,9,0,2,-3,4,0,-1,7,10,0,1,-3,10,0,6,7,-9,0,-1,-8,10,0,1,4,10,0,1,8,10,0,-1,-3,5,0,5,6,-10,0,1,-5,6,0,2,-3,-8,0,1,2,-7,0,5,-7,9,0,-1,4,-9,0,-1,-4,-7,0,-1,-4,8];
var gameH10 = [-4,6,-9,0,4,6,-10,0,3,-8,-10,0,-1,2,-5,0,-1,-4,8,0,-7,8,-10,0,-3,6,10,0,1,2,-7,0,8,9,-10,0,-2,-4,-5,0,-3,6,-8,0,-1,3,8,0,1,-3,10,0,-3,-8,-10,0,2,6,-9,0,1,5,10,0,-2,-8,9,0,1,-5,9,0,-1,2,-6,0,-2,-3,6,0,-4,5,-6,0,2,6,8,0,3,4,-5,0,1,4,10,0,6,-8,10,0,-1,-7,9,0,-4,6,9,0,-1,4,-6,0,-5,6,10,0,-2,-5,-7,0,-1,7,-8,0,-4,5,10,0,1,4,7,0,-1,-6,9,0,-2,-4,-10,0,1,9,-10,0,-2,6,8,0,-7,-8,-10,0,2,-6,-10,0,-2,-3,-7];

var easy = [gameE0,gameE1,gameE2];
var normal = [gameN0,gameN1,gameN2,gameN3,gameN4,gameN5,gameN6,gameN7,gameN8,gameN9,gameN10,gameN11];
var hard = [gameH0,gameH1,gameH2,gameH3,gameH4,gameH5,gameH6,gameH7,gameH8,gameH9,gameH10];
//---------------------------- end database -------------------------------------------------------------

var game = gameE0; //the initial game
var mod = easy; //the initial modus
var gameNo = 0; //the intex of the initial game in the initial modus array

var symbolsOccur; //a list of all symbols that do occur in the game (no double entry)
var solutionText;
var sat; //boolean value

var colorWin = "blue";
var colorNeg = "orange";

var boxes, boxNr;

var youWin; //boolean value
var toProof; //boolean value

var xBox, yBox;
var x, y;

var svg;

//deletes all elements in the SVG element except the first one (= <defs> element)
function clearSVG() {
	var elements = svg.children;
	var length = elements.length;
	for(var i = 1; i < length; i++) {
		svg.removeChild(svg.lastChild);
	}
}

//initialise modus easy with game number 0
function easyMethod() {
	clearSVG();
	mod = easy;
	gameNo = 0;
	game = mod[gameNo];
	document.getElementById("currentMode").innerHTML = "EASY - ";
	document.getElementById("currentGame").innerHTML = "Game "+(gameNo+1);
	init();
}

//initialise modus normal with game number 0
function normalMethod() {
	clearSVG();
	mod = normal;
	gameNo = 0;
	game = mod[gameNo];
	document.getElementById("currentMode").innerHTML = "NORMAL - ";
	document.getElementById("currentGame").innerHTML = "Game "+(gameNo+1);
	init();
}

//initialise modus hard with game number 0
function hardMethod() {
	clearSVG();
	mod = hard;
	gameNo = 0;
	game = mod[gameNo];
	document.getElementById("currentMode").innerHTML = "HARD - ";
	document.getElementById("currentGame").innerHTML = "Game "+(gameNo+1);
	init();
}

//initialise next game in the current modus
function nextGameMethod() {
	clearSVG();
	gameNo++;
	if (gameNo < mod.length) {
		game = mod[gameNo];
	} else {
		gameNo = 0;
		game = mod[gameNo];
	}
	document.getElementById("currentGame").innerHTML = "Game "+(gameNo+1);
	init();
}

//returns comment if game has a solution or not
function noSolution() {
	if (game == gameE1 || game == gameN1) {
		document.getElementById("solution1").innerHTML = "Yes, this game has no solution!";
	} else {
		document.getElementById("solution1").innerHTML = "No, try again, there is a solution!";
	}
}

/*the first mouse click fills the symbol with colorWin, the second with colorNeg, the third with white, 
  the fourth starts with colorWin again, and so on
  @param element is the symbol to be filled */
function fillForm(element) {
	if (element.style.fill == colorWin) {
		element.style.fill = colorNeg;
	} else if (element.style.fill == colorNeg) {
		element.style.fill = "white";
	} else {
		element.style.fill = colorWin;
	}
	proof();
}

//------------------------------------------ initialising ------------------------------------------------

function drawNegLine() {
	var lineElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');	
	lineElement.setAttribute("href", "#line");
	lineElement.setAttribute("transform", "translate("+x+","+(y+50)+")");
	svg.appendChild(lineElement);
}

function drawForm(formId,formName,id) {
	var useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');		
	useElement.setAttribute("href", "#"+formName);
	useElement.setAttribute("transform", "translate("+x+","+y+")");
	useElement.setAttribute("id", formName+id);
	useElement.classList.add(formId, formName);
	useElement.setAttribute("style", "fill:white; stroke:black; stroke-width:2;");
	useElement.setAttribute("onclick", "fillForm(this);");
	svg.appendChild(useElement);
	boxes[boxNr].push(useElement);
	x += 50;
}

function drawBox(id) {
	var boxElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	boxElement.setAttribute("x", xBox);
	boxElement.setAttribute("y", yBox);
	boxElement.setAttribute("width", x-xBox+20);
	boxElement.setAttribute("height", y-yBox+70);
	boxElement.setAttribute("id", "box"+id);
	boxElement.setAttribute("style", "fill:none; stroke:black; stroke-width:3;");
	svg.appendChild(boxElement);
	var textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	textElement.setAttribute("id", "text"+id);
	textElement.setAttribute("x", xBox);
	textElement.setAttribute("y", yBox-5);
	textElement.setAttribute("style", "fill:green;");
	svg.appendChild(textElement);
}

function init() {
	sat = false;
	svg = document.querySelector('svg');
	svg.onselectstart = function () { return false; }
	svg.onmousedown = function () { return false; }
	toProof = false;
	youWin = false;
	document.getElementById("solution1").innerHTML = "";
	document.getElementById("solution2").innerHTML = "";
	document.getElementById("solution3").innerHTML = "";
	document.getElementById("solution4").innerHTML = "";
	document.getElementById("solution5").innerHTML = "";
	document.getElementById("info3").innerHTML = "";
	document.getElementById("info4").innerHTML = "";
	document.getElementById("info5").innerHTML = "";
	solutionText = "";
	symbolsOccur = [];
	boxes = [];
	boxes[0] = [];
	boxNr = 0;
	xBox = 20;
	yBox = 20;
	x = 50;
	y = 50;
	var lineBreak = 0;
	var maxX = x;
	for (var i = 0; i < game.length; i++) {
		addToListSymbolsOccur(game[i]);
		switch (game[i]) {
			case 1:
				drawForm(1,"heart",i);
				break;
			case -1:
				drawNegLine();
				drawForm(-1,"heartNeg", i);
				break;
			case 2:
				drawForm(2,"diamond",i);
				break;
			case -2:
				drawNegLine();
				drawForm(-2,"diamondNeg",i);
				break;
			case 3:
				drawForm(3,"square",i);
				break;
			case -3:
				drawNegLine();
				drawForm(-3,"squareNeg",i);
				break;
			case 4:
				drawForm(4,"tri",i);
				break;
			case -4:
				drawNegLine();
				drawForm(-4,"triNeg",i);
				break;
			case 5:
				drawForm(5,"circle",i);
				break;
			case -5:
				drawNegLine();
				drawForm(-5,"circleNeg",i);
				break;
			case 6:
				drawForm(6,"arrow",i);
				break;
			case -6:
				drawNegLine();
				drawForm(-6,"arrowNeg",i);
				break;
			case 7:
				drawForm(7,"tri2",i);
				break;
			case -7:
				drawNegLine();
				drawForm(-7,"tri2Neg",i);
				break;
			case 8:
				drawForm(8,"circleS",i);
				break;
			case -8:
				drawNegLine();
				drawForm(-8,"circleSNeg",i);
				break;
			case 9:
				drawForm(9,"ell",i);
				break;
			case -9:
				drawNegLine();
				drawForm(-9,"ellNeg",i);
				break;
			case 10:
				drawForm(10,"rect",i);
				break;
			case -10:
				drawNegLine();
				drawForm(-10,"rectNeg",i);
				break;
			case 0:
				drawBox(boxNr);
				x += 100;
				if (x > maxX) maxX = x;
				if (lineBreak < 2) {
					lineBreak++;
				} else {
					y += 130;
					x = 50;
					lineBreak = 0;
				}
				boxNr++;
				boxes[boxNr] = [];
				xBox = x-30;
				yBox = y-30;
				break;
		}
		if (i == 0) {
			solutionText += "(";
		}
		if (game[i] == 0) {
			solutionText += ") ∧ (";
		} else if (game[i] > 0) {
			solutionText += String.fromCharCode(game[i]+96);
			if (i+1 < game.length && game[i+1] != 0) {
				solutionText += " ∨ ";
			}
		} else {
			solutionText += "¬"+String.fromCharCode(game[i]*(-1)+96);
			if (i+1 < game.length && game[i+1] != 0) {
				solutionText += " ∨ ";
			}
		}
	}
	solutionText += ")";
	drawBox(boxNr);
	svg.setAttribute("height", y+100);
	if (x > maxX) maxX = x+30;
	svg.setAttribute("width", maxX);
	if (document.getElementById("proofCheckBox").checked) {
		toProof = true;
	}
	SAT();
}

function addToListSymbolsOccur(symbolNo) {
	if (symbolNo == 0) {
		//do nothing
	} else if (symbolNo > 0) {
		if (symbolsOccur.indexOf(symbolNo) == -1) {
			var index = symbolsOccur.indexOf(symbolNo*(-1));
			if (index != -1) {
				symbolsOccur.splice(index,1);
			}
			symbolsOccur.push(symbolNo);
		}
	} else { //symbolNo < 0
		if (symbolsOccur.indexOf(symbolNo) == -1) {
			if (symbolsOccur.indexOf(symbolNo*(-1)) == -1) {
				symbolsOccur.push(symbolNo);
			}
		}
	}
}

//----------------------- proof -----------------------------------------------

//proof on if check box "Proof On" is selected, otherwise proof off
function proofOnOff() {
	if (document.getElementById("proofCheckBox").checked) {
		toProof = true;
	} else {
		toProof = false;
	}
	proof();
}

//proof all boxes, proof all symbols that occur, show solution (info if the game is won, info for SAT)
function proof() {
	youWin = true;
	proofBox();
	for (var i = 0; i < symbolsOccur.length; i++) {
		proofFigures(symbolsOccur[i]);
	}
	showSolution();
}


/*all Boxes will be proofed, all boxes that are "false" get red-rimmed,
  SAT info if box (clause) is satisfied, undecided or falsified is shown,
  variable boxIsTrue is true when at least one symbol in the box is filled with colorWin,
  variable falsified is true when all symbols that are in a box are filled with colorNeg */
function proofBox() {
	var boxIsTrue = false;
	var falsified = true;
	for (var i = 0; i < boxes.length; i++) {
		for (var j = 0; j < boxes[i].length; j++) {
			if (!boxIsTrue && boxes[i][j].style.fill == colorWin) {
				boxIsTrue = true;
				falsified = false;
				if (sat) {
					document.getElementById("text"+i).innerHTML = "clause - satisfied";
				} else {
					document.getElementById("text"+i).innerHTML = "";
				}
			} else if (falsified && !boxIsTrue && boxes[i][j].style.fill == "white") {
				falsified = false;
				if (sat) {
					document.getElementById("text"+i).innerHTML = "clause - undecided";
				} else {
					document.getElementById("text"+i).innerHTML = "";
				}
			}
		}
		var box = document.getElementById("box"+i);
		if (!boxIsTrue && toProof) {
			youWin = false;
			box.style.stroke = "red";
		} else {
			boxIsTrue = false;
			box.style.stroke = "black";
		}
		if (falsified) {
			youWin = false;
			if (sat) {
				document.getElementById("text"+i).innerHTML = "clause - falsified";
			} else {
				document.getElementById("text"+i).innerHTML = "";
			}
		} else {
			falsified = true;
		}
	}
}

/*proofs all figures that are the same symbol if they have the same color 
  proofs if all underlined figures of that symbol do have the opposite color
  @param figureClass the symbol to proof*/
function proofFigures(figureClass) {
	var elements = document.getElementsByClassName(figureClass);
	var color = "white";
	var errOccured = false;
	colorFigures(elements, "black");
	for (var i = 0; i < elements.length; i++) {
		var colorCurrElement = elements[i].style.fill;
		if (colorCurrElement != "white") {
			if (color == "white") {
				color = colorCurrElement;
			} else if (color != colorCurrElement) {
				if (toProof) colorFigures(elements, "red");
				errOccured = true;
				youWin = false;
				break;
			}
		} else {
			youWin = false;
		}
	}
	var color2 = "white";
	if (color == colorWin) {
		color2 = colorNeg;
	} else if (color == colorNeg) {
		color2 = colorWin;
	}
	var elementsNeg = document.getElementsByClassName(figureClass*(-1));
	colorFigures(elementsNeg, "black");
	for (var i = 0; i < elementsNeg.length; i++) {
		colorCurrElement = elementsNeg[i].style.fill;
		if (colorCurrElement != "white") {
			if (errOccured) {
				if (toProof) colorFigures(elementsNeg, "red");
				break;
			} else if (color2 != "white" && color != "white") {
				if (color2 != colorCurrElement) {
					if (toProof) {
						colorFigures(elements, "red");
						colorFigures(elementsNeg, "red");
					}
					youWin = false;
					break;
				}
			} else if (color2 == "white") {
				color2 = colorCurrElement;
			} else if (color2 != colorCurrElement) { //color == "white"
				if (toProof) colorFigures(elementsNeg, "red");
				youWin = false;
				break;
			}
		} else {
			youWin = false;
		}
	}
}

//colores the figures (elements) with the color in param color
function colorFigures(elements, color) {
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.stroke = color;
	}
}

//shows if the game is won, shows solution for SAT
function showSolution() {
	var sol5 = document.getElementById("solution5");
	sol5.innerHTML = "";
	if (!youWin) {
		document.getElementById("solution2").innerHTML = "";
		return;
	}
	document.getElementById("solution1").innerHTML = "";
	document.getElementById("solution2").innerHTML = "You won!";
	if (!sat) {
		return;
	}
	var solutionText5 = "Your solution for SAT is: ";
	for (var i = 0; i < symbolsOccur.length; i++) {
		if (i > 0) {
			solutionText5 += ", ";
		}
		var elements = document.getElementsByClassName(symbolsOccur[i]);
		if (symbolsOccur[i] > 0) {
			solutionText5 += String.fromCharCode(symbolsOccur[i]+96)+"=";
		} else {
			solutionText5 += String.fromCharCode(symbolsOccur[i]*(-1)+96)+"=";
		}
		if (elements[0].style.fill == "blue") {
			solutionText5 += "TRUE";
		} else {
			solutionText5 += "FALSE";
		}
	}
	sol5.innerHTML = solutionText5;
}

//shows infos about SAT, if "Show SAT" check box is selected
function SAT() {
	if (document.getElementById("SATCheckBox").checked) {
		sat = true;
		document.getElementById("solution3").innerHTML = "As SAT you could rewrite the boxes as :";
		document.getElementById("solution4").innerHTML = solutionText;
		document.getElementById("info3").innerHTML = "SATISFIED : a clause with at least one symbol colored with the winning color";
		document.getElementById("info4").innerHTML = "FALSIFIED : a clause where all symbols are in non-winning color";
		document.getElementById("info5").innerHTML = "UNDECIDED : a clause with symbols in non-winning color and uncolored symbols";
	} else {
		sat = false;
		document.getElementById("solution3").innerHTML = "";
		document.getElementById("solution4").innerHTML = "";
		document.getElementById("info3").innerHTML = "";
		document.getElementById("info4").innerHTML = "";
		document.getElementById("info5").innerHTML = "";
	}
	proof();
}

