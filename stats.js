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
    var aoeo = "Area of Effect Damage: "+Math.round(hpo*.95)+" (Cone, Line, or Radius)";
  } else {
    var aoeo = "";
  }
	var cro = Math.round(levelo);
	var mhpo = Math.round(partyo*damageo*combato)
	var tho = Math.round(aco-10);
	var maco = (attack1+20);
	var msaveo = Math.round(saveo-10);
	var mdamageo = Math.round(hpo*.5)+" (Including all attacks and Legendary actions)";
	element = document.createElement("p");
	element.innerHTML = typo+"<br>"+"CR: "+cro+"<br>HP: "+mhpo+"<br>AC: "+maco+"<br>Proficient Saves: +"+msaveo+"<br>To Hit: +"+tho+"<br>Average DPR: "+mdamageo+"<br>"+aoeo;
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
    var diceo = document.getElementById("dices").value;
    if (diceo == "d4") {
      dicep = "1";
    } else if (diceo == "d6") {
      dicep = "2";
    } else if (diceo == "d8") {
      dicep = "3";
    } else if (diceo == "d10") {
      dicep = "4";
    } else if (diceo == "d12") {
      dicep = "5";
    }

  var table = document.getElementById('dicetable');
  var oCells = table.rows.item(damageo).cells;
  var cellVal = oCells.item(dicep).innerHTML;
  element = document.createElement("p");
  element.innerHTML = "Estimated Dice: "+cellVal;
  document.getElementById("results").innerHTML = element.innerHTML;
}
