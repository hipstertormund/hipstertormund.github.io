//Boss Monster Generation
function boss()
{
//Party Stats variables
	var partyo = document.getElementById("party").value;
	var levelo = document.getElementById("level").value;
	var hpo = document.getElementById("hp").value;
	var aco = document.getElementById("ac").value;
	var attacko = Number(document.getElementById("attack").value);
	//var attack1 = (attacko-10)
	var damageo = document.getElementById("damage").value;
	var saveo = document.getElementById("save").value;
  var combato = document.getElementById("combat").value;
//Monster Stats variables
	var typo = document.getElementById("type").value;

	if (typo == "Null") {
		typep = "";
	} else {
		typep = "Creature Type: "+typo+"<br>";
	}

  if (document.getElementById("aoe").checked) {
    var daoeo = Math.round(hpo*.85);
		var table = document.getElementById('dicetable');
	  var aoeod = table.rows.item(daoeo).cells;
	  var dVal = aoeod.item("1").innerHTML;
		var dVal1 = aoeod.item("2").innerHTML;
		var dVal2 = aoeod.item("3").innerHTML;
		var dVal3 = aoeod.item("4").innerHTML;
		var dVal4 = aoeod.item("5").innerHTML;
		var diceo2 = dVal+", "+dVal1+", "+dVal2+", "+dVal3+", "+dVal4;
		var aoeo = "<br>Area of Effect Damage: "+daoeo+" (Cone, Line, or Radius)<br>AoE Dice: "+diceo2;
  } else {
    var aoeo = "";
  }
	var cro = Math.round(levelo);
	var mhpo = Math.round(partyo*damageo*combato)

	if (aco == "") {
		var tho = "";
	} else {
		var tho = "+"+Math.round(aco-8);
	}


	var maco = (attacko+11);

	if (saveo == "") {
		var msaveo = "";
	} else {
		var msaveo = "+"+Math.round(saveo-9);
	}
	var mdamageo = Math.round(hpo*.75);

	if (hpo == "") {
		var diceo = "";
	} else {
		var table = document.getElementById('dicetable');
		var oCells = table.rows.item(mdamageo).cells;
		var cellVal = oCells.item("1").innerHTML;
		var cellVal1 = oCells.item("2").innerHTML;
		var cellVal2 = oCells.item("3").innerHTML;
		var cellVal3 = oCells.item("4").innerHTML;
		var cellVal4 = oCells.item("5").innerHTML;
		var diceo = "Dice: "+cellVal+", "+cellVal1+", "+cellVal2+", "+cellVal3+", "+cellVal4;
	}

	if (typo == "Null") {
		var i = 0;
	} else if (typo == "Aberration") {
	  var i = 1;
		var j = 1;
	} else if (typo == "Beast") {
	  var i = 2;
	} else if (typo == "Celestial") {
	  var i = 3;
	} else if (typo == "Construct") {
	  var i = 4;
	} else if (typo == "Dragon") {
	  var i = 5;
	} else if (typo == "Elemental") {
	  var i = 6;
	} else if (typo == "Fey") {
	  var i = 7;
	} else if (typo == "Fiend") {
	  var i = 8;
	} else if (typo == "Giant") {
	  var i = 9;
	} else if (typo == "Humanoid") {
	  var i = 10;
	} else if (typo == "Monstrosity") {
	  var i = 11
	} else if (typo == "Ooze") {
	  var i = 12;
	} else if (typo == "Plant") {
	  var i = 13;
	} else if (typo == "Undead") {
	  var i = 14;
	}

	const resistArray = [
		document.getElementById("resist").checked,
		typo != "Null",
	]

	if (!resistArray.includes(false)) {
		var mhpo2 = Math.round(mhpo*.75);
	  var table = document.getElementById('resisttable');
	  var resistd = table.rows.item(i).cells;
	  var dVal = resistd.item(1).innerHTML;
		var dVal2 = resistd.item(2).innerHTML;
		var dVal3 = resistd.item(3).innerHTML;
		var dVal4 = resistd.item(4).innerHTML;
		var dVal5 = resistd.item(5).innerHTML;
		var dVal6 = resistd.item(6).innerHTML;
		var dVal7 = resistd.item(7).innerHTML;
		var dVal8 = resistd.item(8).innerHTML;
		var dVal9 = resistd.item(9).innerHTML;
		var dVal10 = resistd.item(10).innerHTML;
		var dVal11 = resistd.item(11).innerHTML;
		var dVal12 = resistd.item(12).innerHTML;
		var dVal13 = resistd.item(13).innerHTML;

		const resistp2 = [dVal, dVal2, dVal3, dVal4, dVal5, dVal6, dVal7, dVal8, dVal9, dVal10, dVal11, dVal11, dVal12, dVal13];
		const resistResults2 = [];

		resistp2.forEach(element => {
			if (element !== "") {
				resistResults2.push(element);
			}
		});
		const resistResults = resistResults2.join(", ");
		const shuffled = resistResults2.sort(() => 0.5 - Math.random());
		let selected = shuffled.slice(0, 3);
	  var resisto = "<br>Resistances: <br>"+selected+"<br>";
	} else {
	  var resisto = "";
		var mhpo2 = mhpo;
	}

	var difficulty = document.getElementById("difficulty").value;

	if (difficulty == "easy") {
		var quantity = "Quantity: 0-1 (consider using minor enemies for easy encounters)<br>";
	} else if (difficulty == "medium") {
		var quantity = "Quantity: 1-2<br>";
	} else if (difficulty == "hard") {
		var quantity = "Quantity: 2-3<br>";
	} else if (difficulty == "deadly") {
		var quantity = "Quantity: 3-4<br>";
	} else {
		var quantity = "";
	}

	//Write results to area of page
	element = document.createElement("p");
	element.innerHTML = "<h3> Boss Monster(s):</h3>"+
	quantity+
	typep+
	"<br>CR: "+cro+
	"<br>HP: "+mhpo2+"<br>"+
	resisto+
	"<br>AC: "+maco+
	"<br>Proficient Saves: "+msaveo+
	"<br><br>To Hit: "+tho+
	"<br>Average DPR: "+mdamageo+" (Including all attacks and Legendary actions)<br>"+
	diceo+"<br>"+
	aoeo;
	document.getElementById("results").innerHTML = element.innerHTML;

}
//Minion Generation
function minion()
{
//Party Stats variables
	var partyo = document.getElementById("party").value;
	var levelo = document.getElementById("level").value;
	var hpo = document.getElementById("hp").value;
	var aco = document.getElementById("ac").value;
	var attacko = Number(document.getElementById("attack").value);
	//var attack1 = (attacko-10)
	var damageo = document.getElementById("damage").value;
	var saveo = document.getElementById("save").value;
  var combato = document.getElementById("combat").value;
//Monster Stats variables
	var typo2 = document.getElementById("type").value;

	if (typo2 == "Null") {
		typep = "";
	} else {
		typep = "Creature Type: "+typo2+"<br>";
	}

	if (aco == "") {
		var tho = "";
	} else {
		var tho = "+"+Math.round(aco-10);
	}


	var cro = Math.round(levelo*.25);
	var mhpo = Math.round(damageo*.75);
	var maco = (attacko+7);
	var msaveo = Math.round(saveo-15);
	var mdamageo = Math.round(hpo*.4);

	if (hpo == "") {
		var diceo = "";
	} else {
		var table = document.getElementById('dicetable');
		var oCells = table.rows.item(mdamageo).cells;
		var cellVal = oCells.item("1").innerHTML;
		var cellVal1 = oCells.item("2").innerHTML;
		var cellVal2 = oCells.item("3").innerHTML;
		var cellVal3 = oCells.item("4").innerHTML;
		var cellVal4 = oCells.item("5").innerHTML;
		var diceo = "Dice: "+cellVal+", "+cellVal1+", "+cellVal2+", "+cellVal3+", "+cellVal4;
	}

	var difficulty = document.getElementById("difficulty").value;

	if (difficulty == "easy") {
		var quantity = "Quantity: 1-2<br>";
	} else if (difficulty == "medium") {
		var quantity = "Quantity: 3-4<br>";
	} else if (difficulty == "hard") {
		var quantity = "Quantity: 5-6<br>";
	} else if (difficulty == "deadly") {
		var quantity = "Quantity: 6-8<br>";
	} else {
		var quantity = "";
	}

	element = document.createElement("p");
	element.innerHTML = "<h3>Minor Enemies</h3>"+
	quantity+
	typep+
	"<br>CR: "+cro+
	"<br>HP: "+mhpo+
	"<br>AC: "+maco+
	"<br><br>To Hit: "+tho+
	"<br>Average DPR: "+mdamageo+
	"<br>"+diceo;
	document.getElementById("results").innerHTML = element.innerHTML;

}

function search()
  {
  	var damageo = document.getElementById("damage").value;


  var table = document.getElementById('dicetable');
  var oCells = table.rows.item(damageo).cells;
  var cellVal = oCells.item("1").innerHTML;
	var cellVal1 = oCells.item("2").innerHTML;
	var cellVal2 = oCells.item("3").innerHTML;
	var cellVal3 = oCells.item("4").innerHTML;
	var cellVal4 = oCells.item("5").innerHTML;
	var diceo = cellVal+", "+cellVal1+", "+cellVal2+", "+cellVal3+", "+cellVal4;

  element = document.createElement("p");
  element.innerHTML = "Estimated Dice: "+diceo;
  document.getElementById("results").innerHTML = element.innerHTML;
}

function search2()
  {
		var dicedamage = document.getElementById('dicedamage').value;
		var modifier = Number(document.getElementById('modifier').value);
		var attacknum = Number(document.getElementById('attacknum').value);
		if (dicedamage == "1d4"){
				var dicep = 2;
		} else if (dicedamage == "2d4") {
				var dicep = 5;
		}	else if (dicedamage == "1d6") {
				var dicep = 3;
		} else if (dicedamage == "2d6") {
				var dicep = 7;
		} else if (dicedamage == "1d8") {
				var dicep = 4;
		} else if (dicedamage == "2d8") {
				var dicep = 9;
		} else if (dicedamage == "1d10") {
				var dicep = 5;
		} else if (dicedamage == "2d10") {
				var dicep = 11;
		} else if (dicedamage == "1d12") {
				var dicep = 6;
		} else if (dicedamage == "2d12") {
				var dicep = 13;
		}	else {
			dicep = 1;
		}

	var diceOutput1 = Math.round(dicep*attacknum+modifier*attacknum);

	if (diceOutput1 < 0) {
		var diceOutput = 0;
	} else {
		var diceOutput = diceOutput1;
	}

  element = document.createElement("p");
  element.innerHTML = "Average Damage: "+diceOutput;
  document.getElementById("results").innerHTML = element.innerHTML;
}
