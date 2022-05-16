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
