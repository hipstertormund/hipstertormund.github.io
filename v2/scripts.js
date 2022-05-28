var i = 0;
//var j = 0;
var id;
var a = 0;
var c = 0;
var members = 1;
var hitdie6 = ["sorcerer", "wizard"];
var hitdie8 = ["artificer", "bard", "cleric", "druid", "monk", "rogue", "warlock"];
var hitdie10 = ["fighter", "paladin", "ranger"];
var hitdie12 = ["barbarian"];

var multiattack = ["barbarian", "monk", "paladin", "ranger"];

//Dice arrays
var xd4 = ["d4", "2", "5", "7", "10", "12"];
var xd6 = ["d6", "3", "7", "10", "14", "17", "21", "24", "28", "31", "35", "38", "42", "45", "49", "52", "56", "59", "63", "66", "70", "73", "77", "80", "84", "87", "90", "94", "97", "100"];
var xd8 = ["d8", "4", "9", "13", "18", "22"];
var xd10 = ["d10", "5", "11", "16", "22", "27"];
var xd12 = ["d12", "6", "13", "19", "26", "32"];


//Adds party member field
function duplicate() {
    //Set variables
    var original = document.getElementById('partyinputMaster');
    var appendage = document.getElementById('partyinput' + i);
    appendageParent = appendage.parentNode;
    i++
    //Set clone parameters
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "partyinput" + i; // there can only be one element with an ID
    appendage.parentNode.appendChild(clone);

    parent = document.getElementById('partyinput' + i);

    parent.style.display = 'block';

    pclassLabel = parent.children[0];
    childpclass = parent.children[1];
    levelLabel = parent.children[2]
    childlevel = parent.children[3];
    hpLabel = parent.children[4];
    childrenhp = parent.children[5];
    acLabel = parent.children[6];
    childrenac = parent.children[7];
    childrendamage = parent.children[8];



    parentdamage = childrendamage;

    childrenndice = parentdamage.children[0];
    childrenddice = parentdamage.children[1];
    childrenmodifier = parentdamage.children[2];
    childbutton = parentdamage.children[3];

    childpclass.id = "pclass" + i;
    childlevel.id = "level" + i;
    childrenhp.id = "hp" + i;
    childrenac.id = "ac" + i;
    childrendamage.id = "damage" + i;
    childrenndice.id = "ndice" + i;
    childrenddice.id = "ddice" + i;
    childrenmodifier.id = "modifier" + i;
    childbutton.id = i;


    ++members;
    }

//Adds additional damage dice to configuration
function addDice(clicked) {
    id = clicked.id;
    clickedParent = clicked.parentNode;
    //Set variables
    var original = document.getElementById('partyinputMaster');
    var appendage = document.getElementById('partyinput' + id);
    //Set clone parameters
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "partyinputx" +c; // there can only be one element with an ID
    //clone.className = "partyinputx"
    appendage.append(clone);


    parent = document.getElementById(clone.id);

    pclassLabel = parent.children[0];
    childpclass = parent.children[1];
    levelLabel = parent.children[2]
    childlevel = parent.children[3];
    hpLabel = parent.children[4];
    childrenhp = parent.children[5];
    acLabel = parent.children[6];
    childrenac = parent.children[7];
    childrendamage = parent.children[8];


    parentdamage = childrendamage;

    childrenndice = parentdamage.children[0];
    childrenddice = parentdamage.children[1];
    childrenmodifier = parentdamage.children[2];
    childbutton = parentdamage.children[3];

    childpclass.id = "pclassx" + c;
    childlevel.id = "levelx" + c;
    childrenhp.id = "hpx" + c;
    childrenac.id = "acx" + c;
    childrendamage.id = "damagex" + c;
    childrenndice.id = "ndicex" + c;
    childrenddice.id = "ddicex" + c;
    childrenmodifier.id = "modifierx" + c;

    childrendamage.className = 'damagex';

    clone.style.display = 'block';
    pclassLabel.style.display = 'none';
    levelLabel.style.display = 'none';
    hpLabel.style.display = 'none';
    acLabel.style.display = 'none';
    childpclass.style.display = 'none';
    childlevel.style.display = 'none';
    childrenhp.style.display = 'none';
    childrenac.style.display = 'none';
    childbutton.style.display = 'none';

    c++;

}

//Generates list of Condition Immunities
function conditions() {
     if (document.getElementById('conditions').checked) {
       document.getElementById('conditionsOutput').style.display = 'block';
       document.getElementById('conditionsTitle').style.display = 'block';
     } else {
       document.getElementById('conditionsOutput').style.display = 'none';
       document.getElementById('conditionsTitle').style.display = 'none';
     }
  }

//Generates list of Damage Resistances
function resistances() {
     if (document.getElementById('resistances').checked) {
       document.getElementById('resistancesOutput').style.display = 'block';
       document.getElementById('resistanceTitle').style.display = 'block';
     } else {
         document.getElementById('resistancesOutput').style.display = 'none';
         document.getElementById('resistanceTitle').style.display = 'none';
       }
    }

//Sets AoE Damage
function aoe() {
  if (document.getElementById('aoe').checked) {
    aoedamage = Math.round(averagehp1*.45);
    x = 1;
    index = xd6[x];
    while (aoedamage > index) {
      index = xd6[x];
      x++;
    }
    --x;
    attackmodifier = aoedamage-index;
    if (attackmodifier > 0) {
    } else {
      --x;
      index = xd6[x];
      attackmodifier = aoedamage-index;
    }
    var aoedice = x+xd6[0];


    element = document.createElement('p');
    element.innerHTML = "Aoe Damage: "+aoedamage+"<br>Best Dice: "+aoedice;
    document.getElementById('maoe').innerHTML = element.innerHTML;
  } else {
    element = document.createElement('p');
    element.innerHTML = "";
    document.getElementById('maoe').innerHTML = element.innerHTML;
  }

}

//Grabs all HP values of party and updates defaults by class
function partyVariablesHP(clicked) {
  var id = clicked.id;

  for (let k = 0; k < members; k++) {
    pclass1 = document.getElementById('pclass' + k).value;
    level1 = Number(document.getElementById('level' + k).value);
    hp1 = Number(document.getElementById('hp' + k).value);
    if (id == 'pclass' + k) {
    if (hitdie8.includes(pclass1)) {
      document.getElementById('hp' + k).value = 8*level1;
    } else if (hitdie10.includes(pclass1)) {
      document.getElementById('hp' + k).value = 10*level1;
    } else if (hitdie12.includes (pclass1)) {
      document.getElementById('hp' + k).value = 12*level1;
    } else {
      document.getElementById('hp' + k).value = 6*level1;
    }
  } else if (id == 'hp' + k) {
    if (hitdie8.includes(pclass1)) {
      document.getElementById('hp' + k).value = 8*level1;
    } else if (hitdie10.includes(pclass1)) {
      document.getElementById('hp' + k).value = 10*level1;
    } else if (hitdie12.includes (pclass1)) {
      document.getElementById('hp' + k).value = 12*level1;
    } else {
      document.getElementById('hp' + k).value = 6*level1;
    }
  } else if (id == 'level' + k) {
    if (hitdie8.includes(pclass1)) {
      document.getElementById('hp' + k).value = 8*level1;
    } else if (hitdie10.includes(pclass1)) {
      document.getElementById('hp' + k).value = 10*level1;
    } else if (hitdie12.includes (pclass1)) {
      document.getElementById('hp' + k).value = 12*level1;
    } else {
      document.getElementById('hp' + k).value = 6*level1;
    }
  } else {

  }
}
    generateHP();
  }

//Grabs all AC values
function partyVariablesAC() {
  for (let k = 0; k < members; k++) {
    ac1 = document.getElementById('ac' + k).value;
  }
  generateAC();
}

//Grabs all DPR values
function partyVariablesDamage() {


    for (let k = 0; k < members; k++) {
      pclass1 = document.getElementById('pclass' + k).value;
      level1 = document.getElementById('level' + k).value;
      number1 = document.getElementById('ndice' + k).value;
      dice1 = document.getElementById('ddice' + k).value;
      modifier1 = document.getElementById('modifier' + k).value;
      if (dice1 == "oned4") {
        dice = 2;
      } else if (dice1 == "oned6") {
        dice = 3;
      } else if (dice1 == "oned8") {
        dice = 4;
      } else if (dice1 == "oned10") {
        dice = 5;
      } else if (dice1 == "oned12") {
        dice = 6;
      } else if (dice1 == "twod6") {
        dice = 7;
      } else {
        dice = 0;
      }

      if (multiattack.includes(pclass1)) {
        if (level1 > 4) {
          attacks = 2;
        } else {
          attacks = 1;
        }
      } else {
        attacks = 1;
      }
      generateDamage();
  }

  }

//Generates monsters DPR based on party HP
function generateHP(clicked) {
  var id = clicked.id;

  totalhp = 0;
  j = 0;

  while (j < members) {
    hp2 = Number(document.getElementById('hp' + j).value);
    totalhp = totalhp + hp2;
    averagehp1 = Math.round(totalhp/members);
    averagedpr = Math.round(averagehp1*.73);

    if (averagedpr > 85) {
      if (members < 4) {
      var multiattack = 3+members;
      var actions = "3 Attacks, "+members+" Legendary Actions<br>Per Attack: "+Math.round(averagedpr/multiattack);
    } else {
      var multiattack = 6;
      var actions = "3 Attacks, 3 Legendary Actions<br>Per Attack: "+Math.round(averagedpr/multiattack);
    }
    } else if (averagedpr > 68) {
        if (members < 3) {
          var multiattack = 3+members;
          var actions = "3 Attacks, "+members+" Legendary Actions<br>Per Attack: "+Math.round(averagedpr/multiattack);
      } else {
          var multiattack = 5;
            var actions = "3 Attacks, 2 Legendary Actions<br>Per Attack: "+Math.round(averagedpr/multiattack);
          }
    } else if (averagedpr > 51) {
      var multiattack = 4;
      var actions = "3 Attacks, 1 Legendary Actions<br>Per Attack: "+Math.round(averagedpr/multiattack);
    } else if (averagedpr > 34) {
      var multiattack = 3;
      var actions = "3 Attacks<br>Per Attack: "+Math.round(averagedpr/multiattack);
    } else if (averagedpr > 17) {
      var multiattack = 2;
      var actions = "2 Attacks<br>Per Attack: "+Math.round(averagedpr/multiattack);
    } else if (averagedpr > 9) {
      var multiattack = 1;
      var actions = "1 attack<br>Per Attack: "+Math.round(averagedpr/multiattack);
    } else if (averagedpr > 6) {
      var multiattack = 1;
      var actions = "1 attack<br>Per Attack: "+Math.round(averagedpr/multiattack);
    } else if (averagedpr > 4){
      var multiattack = 1;
      var actions = "1 attack<br>Per Attack: "+Math.round(averagedpr/multiattack);
    } else {
      var multiattack = 1;
      var actions = "1 attack<br>Per Attack: "+Math.round(averagedpr/multiattack);
    }
    dprtest = Math.round(averagedpr/multiattack);
//D4 Calculations
    x = 1;
    index = xd4[x];
    while (dprtest > index) {
      index = xd4[x];
      x++;
    }
    attackmodifier = dprtest-index;
    if (attackmodifier > 0) {
    } else {
      x = x-2;
      index = xd4[x];
      attackmodifier = dprtest-index;
    }
    var bestd4 = x+xd4[0]+"+"+attackmodifier;
//D6 Calculations
    x = 1;
    index = xd6[x];
    while (dprtest > index) {
      index = xd6[x];
      x++;
    }
    --x;
    attackmodifier = dprtest-index;
    if (attackmodifier > 0) {
    } else {
      --x;
      index = xd6[x];
      attackmodifier = dprtest-index;
    }
    var bestd6 = x+xd6[0]+"+"+attackmodifier;
//D8 Calculations
    x = 1;
    index = xd8[x];
    while (dprtest > index) {
      index = xd8[x];
      x++;
    }
    attackmodifier = dprtest-index;
    if (attackmodifier > 0) {
    } else {
      x = x -2;
      index = xd8[x];
      attackmodifier = dprtest-index;
    }
    var bestd8 = x+xd8[0]+"+"+attackmodifier;
//D10 Calculations
    x = 1;
    index = xd10[x];
    while (dprtest > index) {
      index = xd10[x];
      x++;
    }
    attackmodifier = dprtest-index;
    if (attackmodifier > 0) {
    } else {
      x = x-2;
      index = xd10[x];
      attackmodifier = dprtest-index;
    }
    var bestd10 = x+xd10[0]+"+"+attackmodifier;
//D12 Calculations
    x = 1;
    index = xd12[x];
    while (dprtest > index) {
      index = xd12[x];
      x++;
    }
    --x;
    index = xd12[x];
    attackmodifier = dprtest-index;
    if (attackmodifier > 0) {
    } else {
      --x;
      index = xd12[x];
      attackmodifier = dprtest-index;
    }
    var bestd12 = x+xd12[0]+"+"+attackmodifier;


    ++j;
  }

  element = document.createElement('p');
  element.innerHTML = "DPR: "+averagedpr;
  document.getElementById('mdamage').innerHTML = element.innerHTML;

  element2 = document.createElement('p');
  element2.innerHTML = "Actions: <br>"+actions+"<br>Best Dice: "+bestd4+", "+bestd6+", "+bestd8+", "+bestd10+", "+bestd12;
  document.getElementById('mactions').innerHTML = element2.innerHTML;

  aoe();
}

//Generates monsters to hit based on average party AC
function generateAC() {
  totalac = 0;
  j = 0;

  while (j < members) {
    ac2 = Number(document.getElementById('ac' + j).value);
    totalac = totalac + ac2;
    averageac = Math.round(totalac/members);
    ++j;
  }

  element = document.createElement('p');
  element.innerHTML = "To Hit: +"+Number(averageac-8);
  document.getElementById('mtohit').innerHTML = element.innerHTML;


}

//Generates monsters HP and to hit based on party's DPR, and proficiency bonus
function generateDamage() {
  proficiency = 0;
  totaldamage = 0;
  totalTohit = 0;
  totaldamageAdd = 0;
  j = 0;

  for (k = 0; k < c; k++) {
    ndiceAdd = Number(document.getElementById('ndicex' + k).value);
    ddiceAdd = document.getElementById('ddicex' + k).value;
    modifierAdd = Number(document.getElementById('modifierx' + k).value);
      if (ddiceAdd == "oned4") {
        diceAdd = 2;
      } else if (ddiceAdd == "oned6") {
        diceAdd = 3;
      } else if (ddiceAdd == "oned8") {
        diceAdd = 4;
      } else if (ddiceAdd == "oned10") {
        diceAdd = 5;
      } else if (ddiceAdd == "oned12") {
        diceAdd = 6;
      } else if (ddiceAdd == "twod6") {
        diceAdd = 7;
      } else {
        diceAdd = 0;
      }
    var damageAdd = Math.round(ndiceAdd*diceAdd);
    var totaldamageAdd1 = damageAdd+modifierAdd;
    totaldamageAdd = totaldamageAdd1;
  }

  while (j < members) {
    modifier1 = Number(document.getElementById('modifier' + j).value);
    damage3 = Number(document.getElementById('ndice' + j).value)*dice+modifier1;
    level1 = Number(document.getElementById('level' + j).value);
    damage2 = damage3*attacks;
    totaldamage = totaldamage+damage2;
    averagedpr = totaldamage/members;
    if (level1 > 16) {
      proficiency = 6;
    } else if (level1 > 12) {
      proficiency = 5;
    } else if (level1 > 8) {
      proficiency = 4;
    } else if (level1 > 4) {
      proficiency = 3;
    } else {
      proficiency = 2;
    }
    totalTohit = totalTohit + modifier1 + proficiency;
    averageTohit = Math.round(totalTohit/members);
    j++;
    }
  var rounds = document.getElementById('rounds').value;
  totaldamage2 = totaldamage + totaldamageAdd;

  element = document.createElement('p');
  element.innerHTML = "HP: "+Math.round(totaldamage2*rounds);
  document.getElementById('mhp').innerHTML = element.innerHTML;

  element2 = document.createElement('p');
  element2.innerHTML = "AC: "+Number(averageTohit+10);
  document.getElementById('mac').innerHTML = element2.innerHTML;
}

//Add selected Conditions to statblock
function generateConditions() {
  const conditions = [];
  parent = document.getElementById('conditionsOutput');
    for (z = 0; z < 24; z++) {
      if (parent.children[z].checked == true) {
        conditions.push(parent.children[z].value);
      }
    }

  element = document.createElement('p');
  element.innerHTML = "Condition Immunities<br>"+conditions.join(', ');
  document.getElementById('mconditions').innerHTML = element.innerHTML;
}

//Add selected Resistances to statblock
function generateResistances() {
  const resistances = [];
  parent = document.getElementById('resistancesOutput');
    for (z = 0; z < 22; z++) {
      if (parent.children[z].checked == true) {
        resistances.push(parent.children[z].value);
        //resistances.join(' ');
      }
    }
  element = document.createElement('p');
  element.innerHTML = "Resistances<br>"+resistances.join(', ');
  document.getElementById('mresistances').innerHTML = element.innerHTML;
}

//Generate Random Condition Immunities
function randomConditions() {
  const randomConditions = [];
  const select2 = [];
  var randomCondit = document.getElementById('randomCondit').value;
  parent = document.getElementById('conditionsOutput');
    for (z = 0; z < 24; z++) {
      if (parent.children[z].type == 'checkbox') {
        randomConditions.push(parent.children[z].value);
      }
    }
    const shuffled = randomConditions.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, randomCondit);

    element = document.createElement('p');
    element.innerHTML = "Condition Immunities<br>"+selected.join(', ');
    document.getElementById('mconditions').innerHTML = element.innerHTML;
}

//Generate Random Damage Resistances
function randomResistances() {
  const randomResistances = [];
  const select2 = [];
  var randomResist = document.getElementById('randomResist').value;
  parent = document.getElementById('resistancesOutput');
    for (z = 0; z < 22; z++) {
      if (parent.children[z].type == 'checkbox') {
        randomResistances.push(parent.children[z].value);
      }
    }
    const shuffled = randomResistances.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, randomResist);

    element = document.createElement('p');
    element.innerHTML = "Resistances<br>"+selected.join(', ');
    document.getElementById('mresistances').innerHTML = element.innerHTML;
}

//Select Creature Type for stat block
function creaturetype() {
  creature = document.getElementById('creaturetype').value;
  if (creature == "null") {
    creatureOutput = "";
  } else {
    creatureOutput = "Type: "+creature;
  }
  element = document.createElement('p');
  element.innerHTML = creatureOutput;
  document.getElementById('creatureOutput').innerHTML = element.innerHTML;
}
