var typo = document.getElementById("type").value;

if (typo == "Null") {
  var resistance = "";
} else if (typo == "Aberation") {
  var i = "1";
} else if (typo == "Beast") {
  var i = "2";
} else if (typo == "Celestial") {
  var i = "3";
} else if (typo == "Construct") {
  var i = "4";
} else if (typo == "Dragon") {
  var i = "5";
} else if (typo == "Elemental") {
  var i = "6";
} else if (typo == "Fey") {
  var i = "7";
} else if (typo == "Fiend") {
  var i = "8";
} else if (typo == "Giant") {
  var i = "9";
} else if (typo == "Humanoid") {
  var i = "10";
}else if (typo == "Monstrosity") {
  var i = "11";
} else if (typo == "Ooze") {
  var i = "12";
} else if (typo == "Plant") {
  var i = "13";
} else if (typo == "Undead") {
  var i = "14";


if (document.getElementById("resist").checked) {
  var table = document.getElementById('resisttable');
  var resistd = table.rows.item(i).cells;
  var dVal = aoeod.item("1").innerHTML;
  var dVal1 = aoeod.item("2").innerHTML;
  var dVal2 = aoeod.item("3").innerHTML;
  var dVal3 = aoeod.item("4").innerHTML;
  var dVal4 = aoeod.item("5").innerHTML;
  var resistp = dVal+", "+dVal1+", "+dVal2+", "+dVal3+", "+dVal4;
  var resisto = "Resistances: "+resistp;
} else {
  var resisto = "";
}
