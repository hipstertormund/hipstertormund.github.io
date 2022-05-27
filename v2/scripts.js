var i = 0;
var j = 0;
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
    var original = document.getElementById('partyinput' + i);
    //increment i by 1
    ++i;
    //Set clone parameters
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "partyinput" + i; // there can only be one element with an ID
    original.parentNode.appendChild(clone);

    parent = document.getElementById('partyinput' + i);

    childpclass = parent.children[0];
    childlevel = parent.children[1];
    childrenhp = parent.children[2];
    childrenac = parent.children[3];
    childrendamage = parent.children[4];


    parentdamage = childrendamage;

    childrenndice = parentdamage.children[0];
    childrenddice = parentdamage.children[1];
    childrenmodifier = parentdamage.children[2];
    childrenbutton = parentdamage.children[3];

    childpclass.id = "pclass" + i;
    childlevel.id = "level" + i;
    childrenhp.id = "hp" + i;
    childrenac.id = "ac" + i;
    childrendamage.id = "damage" + i;
    childrenndice.id = "ndice" + i;
    childrenddice.id = "ddice" + i;
    childrenmodifier.id = "modifier" + i;

    ++members;
    }

//Adds additional damage dice to configuration
function addDice() {
    //Set variables
    var original = document.getElementById('partyinput' + i);
    //increment i by 1
    ++i;
    //Set clone parameters
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "partyinput" + i; // there can only be one element with an ID
    original.parentNode.appendChild(clone);

    parent = document.getElementById('partyinput' + i);
    childpclass = parent.children[0];
    childlevel = parent.children[1];
    childrenhp = parent.children[2];
    childrenac = parent.children[3];
    childrendamage = parent.children[4];

    parentdamage = childrendamage;

    childrenndice = parentdamage.children[0];
    childrenddice = parentdamage.children[1];
    childrenmodifier = parentdamage.children[2];
    childrenbutton = parentdamage.children[3];

    childpclass.id = "pclass" + i;
    childlevel.id = "level" + i;
    childrenhp.id = "hp" + i;
    childrenac.id = "ac" + i;
    childrendamage.id = "damage" + i;
    childrenndice.id = "ndice" + i;
    childrenddice.id = "ddice" + i;
    childrenmodifier.id = "modifier" + i;

    childpclass.remove();
    childlevel.remove();
    childrenhp.remove();
    childrenac.remove();

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
function partyVariablesHP() {

  for (let k = 0; k < members; k++) {
    pclass1 = document.getElementById('pclass' + k).value;
    level1 = Number(document.getElementById('level' + k).value);
    hp1 = Number(document.getElementById('hp' + k).value);
    if (hitdie8.includes(pclass1)) {
      document.getElementById('hp' + k).value = 8*level1;
    } else if (hitdie10.includes(pclass1)) {
      document.getElementById('hp' + k).value = 10*level1;
    } else if (hitdie12.includes (pclass1)) {
      document.getElementById('hp' + k).value = 12*level1;
    } else {
      document.getElementById('hp' + k).value = 6*level1;
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
function generateHP() {
  totalhp = 0;
  j = 0;

  while (j < members) {
    hp2 = Number(document.getElementById('hp' + j).value);
    totalhp = totalhp + hp2;
    averagehp1 = Math.round(totalhp/members);
    averagedpr = Math.round(averagehp1*.73);

    if (averagedpr > 85) {
      var multiattack = 6;
      var actions = "3 Attacks, 3 Legendary Actions<br>Per Attack: "+Math.round(averagedpr/multiattack);
    } else if (averagedpr > 68) {
      var multiattack = 5;
      var actions = "3 Attacks, 2 Legendary Actions<br>Per Attack: "+Math.round(averagedpr/multiattack);
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
  j = 0;

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

    ++j;
    }
  var rounds = document.getElementById('rounds').value;

  element = document.createElement('p');
  element.innerHTML = "HP: "+Math.round(totaldamage*rounds);
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
