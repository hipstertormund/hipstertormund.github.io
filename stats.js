//Boss Monster Generation
function boss()
{
//Party Stats variables
	var partyo = document.getElementById("party").value;
	var levelo = document.getElementById("level").value;
	var hpo = document.getElementById("hp").value;
	var aco = document.getElementById("ac").value;
	var attacko = document.getElementById("attack").value;
	var attack1 = (attacko-10)
	var damageo = document.getElementById("damage").value;
	var saveo = document.getElementById("save").value;
  var combato = document.getElementById("combat").value;
//Monster Stats variables
  var typo = "<h3>Stat Block</h3> "+document.getElementById("type").value;
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
		var aoeo = "Area of Effect Damage: "+daoeo+" (Cone, Line, or Radius)<br>AoE Dice: "+diceo2;
  } else {
    var aoeo = "";
  }
	var cro = Math.round(levelo);
	var mhpo = Math.round(partyo*damageo*combato)
	var tho = Math.round(aco-10);
	var maco = (attack1+20);
	var msaveo = Math.round(saveo-10);
	var mdamageo = Math.round(hpo*.5);

	var table = document.getElementById('dicetable');
  var oCells = table.rows.item(mdamageo).cells;
  var cellVal = oCells.item("1").innerHTML;
	var cellVal1 = oCells.item("2").innerHTML;
	var cellVal2 = oCells.item("3").innerHTML;
	var cellVal3 = oCells.item("4").innerHTML;
	var cellVal4 = oCells.item("5").innerHTML;
	var diceo = cellVal+", "+cellVal1+", "+cellVal2+", "+cellVal3+", "+cellVal4;


	//Write results to area of page
	element = document.createElement("p");
	element.innerHTML = typo+"<br>"+"CR: "+cro+"<br>HP: "+mhpo+"<br>AC: "+maco+"<br>Proficient Saves: +"+msaveo+"<br>To Hit: +"+tho+"<br>Average DPR: "+mdamageo+" (Including all attacks and Legendary actions)<br>Dice: "+diceo+"<br>"+aoeo;
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
	var attacko = document.getElementById("attack").value;
	var attack1 = (attacko-10)
	var damageo = document.getElementById("damage").value;
	var saveo = document.getElementById("save").value;
  var combato = document.getElementById("combat").value;
//Monster Stats variables
  var typo = document.getElementById("type").value;
	var cro = Math.round(levelo*.25);
	var mhpo = Math.round(damageo*.5)
	var tho = Math.round(aco-15);
	var maco = (attack1+15);
	var msaveo = Math.round(saveo-15);
	var mdamageo = Math.round(hpo*.25);
	element = document.createElement("p");
	element.innerHTML = typo+"<br>"+"CR: "+cro+"<br>HP: "+mhpo+"<br>AC: "+maco+"<br>To Hit: +"+tho+"<br>Average DPR: "+mdamageo;
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
  	var damageo = 2


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
