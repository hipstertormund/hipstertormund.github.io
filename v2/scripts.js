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
var xd4 = ["d4", "2", "5", "7", "10", "12", "15", "17", "20", "22", "25", "27", "30", "32", "35", "37", "40", "42", "45", "47", "50", "52", "55", "57", "60", "62", "65", "67", "70", "72"];
var xd6 = ["d6", "3", "7", "10", "14", "17", "21", "24", "28", "31", "35", "38", "42", "45", "49", "52", "56", "59", "63", "66", "70", "73", "77", "80", "84", "87", "91", "94", "98", "101", "105"];
var xd8 = ["d8", "4", "9", "13", "18", "22", "27", "31", "36", "40", "45", "49", "54", "58", "63", "67", "72", "76", "81", "85", "90", "94", "99", "103", "108", "112", "117", "121", "126", "130"];
var xd10 = ["d10", "5", "11", "16", "22", "27", "33", "38", "44", "49", "55", "60", "66", "71", "77", "82", "88", "93", "99", "104", "110", "115", "121", "126", "132", "137", "143", "148", "154", "159"];
var xd12 = ["d12", "6", "13", "19", "26", "32", "39", "45", "52", "58", "65", "71", "78", "84", "91", "97", "104", "110", "117", "123", "130", "136", "143", "149", "156", "162", "169", "175", "182", "188"];
var xd20 = ["d20", "10", '21', '31', '42', '52', '63', '73', '84', '94', '105', '115', '126', '136', '147', '157', '168', '178', '189', '199', '210', '220', '231', '241', '252', '262', '273', '283', '294', '304', '315'];

var totaldamageAdd = 0;

var monsterHP = ["0", "85", "100", "115", "130", "145", "160", "175", "190", "205", "220", "235", "250", "265", "280", "295", "310", "325", "340", "355", "400", "445", "490", "535", "580", "625", "670", "715", "760", "805", "850"];
var monsterAC = ["13", "13", "13", "14", "15", "15", "15", "16", "16", "17", "17", "17", "18", "18", "18", "18", "19", "19", "19", "19", "20", "20", "20", "20", "21", "21", "21", "21", "22", "22", "22", "22", "23"];
var monsterAB = ["3", "3", "4", "5", "6", "6", "6", "7", "7", "7", "8", "8", "8", "8", "8", "9", "10", "10", "10", "10", "11", "11", "11", "12", "12", "12", "13", "13", "13", "14"]
var monsterDPR = ["8", "14", "20", "26", "32", "38", "44", "50", "56", "62", "68", "74", "80", "86", "92", "98", "104", "110", "116", "122", "140", "158", "176", "194", "212", "230", "248", "266", "284", "302", "320"];
var monsterProf = ["2", "2", "2", '2', '2', '3', '3', '3', '3', '4', '4', '4', '4', '5', '5', '5', '5', '6', '6', '6', '6', '7', '7', '7', '7', '8', '8', '8', '8', '9', '9'];

var monsterDC = ["13", "13", "13", "13", "14", "15", "15", "15", "16", "16", "17", "17", "18", "18", "18", "18", "19", "19", "19", "19", "20", "20", "20", "21", "21", "21", "22", "22", "22", "23"];

var totalCR1 = 0;

var s = 0;

var pclassStorage = {};
var levelStorage = {};
var hpStorage = {};
var acStorage = {};
var ndiceStorage = {};
var ddiceStorage = {};
var modifierStorage = {};


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

function partyVariablesHP2() {

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
  totalhp = 0;
  j = 0;

  while (j < members) {
    hp2 = Number(document.getElementById('hp' + j).value);
    totalhp = totalhp + hp2;
    averagehp1 = Math.round(totalhp/members);
    averagedpr = Math.round(averagehp1*.5);

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
  element2.innerHTML = "Actions: <br>"+actions+"<br>Best Dice: "+bestd4+"<br>"+bestd6+"<br>"+bestd8+"<br>"+bestd10+"<br>"+bestd12;
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

  mtohit = Number(averageac-8);

  element = document.createElement('p');
  element.innerHTML = "To Hit: +"+mtohit;
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
    totaldamageAdd = totaldamageAdd+totaldamageAdd1;
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
  mhp = Math.round(totaldamage2*rounds);

  z=1;
  mcr = monsterHP[z];

  if (mhp <= 6) {
    mcr1 = 0;
  } else if (mhp <= 35) {
    mcr1 = 0.125;
  } else if (mhp <= 49) {
    mcr1 = .25;
  } else if (mhp <= 70) {
    mcr1 = .5;
  } else {
    while (mcr <= mhp) {
      mcr = monsterHP[z];
      z++;
      mcr1 = z;
    }
  }
  mAC = Number(averageTohit+10);


  element = document.createElement('p');
  element.innerHTML = "HP: "+mhp;
  document.getElementById('mhp').innerHTML = element.innerHTML;

  element2 = document.createElement('p');
  element2.innerHTML = "AC: "+mAC;
  document.getElementById('mac').innerHTML = element2.innerHTML;

  generateCR();
}

//Generate creature CR by calculating Offensive and Defensive CR
function generateCR() {

  var hpCR = mcr1;

  z = 0;
  var acCR = 0;
    while (mAC > monsterAC[z]) {
    z++;
    dcr = monsterAC[z];
    acCR = z;
  }

  z = 0;
  var abCR = 0;
  while (mtohit > monsterAB[z]) {
    z++;
    ocr1 = monsterAB[z];
    abCR = z;
  }

  var averagedprCR = averagehp1*.5;
  z = 0;
  var dprCR = 0;
  while (averagedprCR > monsterDPR[z]) {
    z++;
    ocr2 = monsterDPR[z];
    dprCR = z;
  }

  var totalCR = Number(hpCR)+Number(acCR)+Number(abCR)+Number(dprCR);
  totalCR1 = Math.round(totalCR/4);

  var mDC = monsterDC[totalCR1];

  var example = totalCR1+4;
  var exampleCR = "https://www.dndbeyond.com/monsters?filter-cr-max="+example+"&filter-cr-min="+example+"&filter-search=&filter-type=0";

  link = document.createElement('a');
  link.innerHTML = "Example";
  document.getElementById('examples').innerHTML = '<a target="_blank" href="'+exampleCR+'">'+link.innerHTML+'</a>';


  element = document.createElement('p');
  element.innerHTML = "Save DC: "+mDC;
  document.getElementById('saveDC').innerHTML = element.innerHTML;

  element3 = document.createElement('p');
  element3.innerHTML = "CR: "+totalCR1;
  document.getElementById('mcr').innerHTML = element3.innerHTML;
}

//Generate Creature size based on input
function generateSize() {

if (creatureSize != "null") {
    var creatureSize = document.getElementById('creatureSize').value;
  } else {
    creatureSize = "";
  }

  var atkmodifier = mtohit-monsterProf[totalCR1];

  if (creatureSize == 'Tiny') {
    var mhitdie = xd4[totalCR1];
    var mdexmod = mAC;
    var monsterHitdie = "d4";
    var strmmodifier = Math.floor(atkmodifier*1.5);
  } else if (creatureSize == 'Small') {
    var mhitdie = xd6[totalCR1];
    var mdexmod = mAC-3;
    var monsterHitdie = "d6";
    var strmmodifier = Math.floor(3+atkmodifier*1.5);
  } else if (creatureSize == 'Medium') {
    var mhitdie = xd8[totalCR1];
    var mdexmod = mAC-5;
    var monsterHitdie = "d8";
    var strmmodifier = Math.floor(5+atkmodifier*1.5);
  } else if (creatureSize == 'Large') {
    var mhitdie = xd10[totalCR1];
    var mdexmod = mAC-7;
    var monsterHitdie = "d10";
    var strmmodifier = Math.floor(10+atkmodifier*1.5);
  } else if (creatureSize == 'Huge') {
    var mhitdie = xd12[totalCR1];
    var mdexmod = mAC-12;
    var monsterHitdie = "d12";
    var strmmodifier = Math.floor(12+atkmodifier*1.5);
  } else if (creatureSize == 'Gargantuan') {
    var mhitdie = xd20[totalCR1];
    var mdexmod = mAC-14;
    var monsterHitdie = "d20";
    var strmmodifier = 15+atkmodifier*2;
  } else {
    var mhitdie = 0;
    var mdexmod = mAC-10;
    var monsterHitdie = "";
  }

  document.getElementById('str').value = strmmodifier;
  generateSTR();

  var conmodifier = Math.round(mhitdie/totalCR1);
  document.getElementById('con').value = 10+conmodifier*2;
  generateCON();

  document.getElementById('dex').value = mdexmod;
  generateDEX();

  element2 = document.createElement('a');
  element2.innerHTML = "("+totalCR1+monsterHitdie+"+"+mhitdie+")";
  document.getElementById('mhitdie').innerHTML = element2.innerHTML;

  element = document.createElement('p');
  element.innerHTML = creatureSize;
  document.getElementById('sizeOutput').innerHTML = element.innerHTML;
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
    creatureOutput = creature;
  }
  element = document.createElement('p');
  element.innerHTML = creatureOutput;
  document.getElementById('creatureOutput').innerHTML = element.innerHTML;
}

//Update Strength Modifier by strength score
function generateSTR() {
  var str = document.getElementById('str').value;
    if (str > 10) {
      var mSTR1 = Math.round(str-10);
      var mSTR = Math.floor(mSTR1/2);
      if (mSTR > 0) {
        var mSTR = "+"+mSTR;
      }

    } else if (str < 10) {
        var mSTR1 = str-10;
        var mSTR = Math.floor(mSTR1/2);
    } else {
      mSTR = 0;
    }
    element = document.createElement('p');
    element.innerHTML = mSTR;
    document.getElementById('strOutput').innerHTML = element.innerHTML;


}

//Update Dexterity Modifier by dexterity score
function generateDEX() {
  var dex = document.getElementById('dex').value;
    if (dex > 10) {
      var mDEX1 = Math.round(dex-10);
      var mDEX = Math.floor(mDEX1/2);
      if (mDEX > 0) {
        var mDEX = "+"+mDEX;
      }
    } else if (dex < 10) {
        var mDEX1 = dex-10;
        var mDEX = Math.floor(mDEX1/2);
    } else {
      mDEX = 0;
    }
    element = document.createElement('p');
    element.innerHTML = mDEX;
    document.getElementById('dexOutput').innerHTML = element.innerHTML;

}

//Update Constitution Modifier by con score
function generateCON() {
  var con = document.getElementById('con').value;
    if (con > 10) {
      var mCON1 = Math.round(con-10);
      var mCON = Math.floor(mCON1/2);
      if (mCON > 0) {
        var mCON = "+"+mCON;
      }
    } else if (con < 10) {
        var mCON1 = con-10;
        var mCON = Math.floor(mCON1/2);
    } else {
      mCON = 0;
    }
    element = document.createElement('p');
    element.innerHTML = mCON;
    document.getElementById('conOutput').innerHTML = element.innerHTML;

}

//Update intelligence modifier by int score
function generateINT() {
  var int = document.getElementById('int').value;
    if (int > 10) {
      var mINT1 = Math.round(int-10);
      var mINT = Math.floor(mINT1/2);
      if (mINT > 0) {
        var mINT = "+"+mINT;
      }
    } else if (int < 10) {
        var mINT1 = int-10;
        var mINT = Math.floor(mINT1/2);
    } else {
      mINT = 0;
    }
    element = document.createElement('p');
    element.innerHTML = mINT;
    document.getElementById('intOutput').innerHTML = element.innerHTML;
}

//Update wisdom modifier by wis score
function generateWIS() {
  var wis = document.getElementById('wis').value;
    if (wis > 10) {
      var mWIS1 = Math.round(wis-10);
      var mWIS = Math.floor(mWIS1/2);
      if (mWIS > 0) {
        var mWIS = "+"+mWIS;
      }

    } else if (wis < 10) {
        var mWIS1 = wis-10;
        var mWIS = Math.floor(mWIS1/2);
    } else {
      mWIS = 0;
    }
    element = document.createElement('p');
    element.innerHTML = mWIS;
    document.getElementById('wisOutput').innerHTML = element.innerHTML;
}

//update charisma modifier by charisma score
function generateCHA() {
  var cha = document.getElementById('cha').value;
    if (cha > 10) {
      var mCHA1 = Math.round(cha-10);
      var mCHA = Math.floor(mCHA1/2);
      if (mCHA > 0) {
        var mCHA = "+"+mCHA;
      }

    } else if (cha < 10) {
        var mCHA1 = cha-10;
        var mCHA = Math.floor(mCHA1/2);
    } else {
      mCHA = 0;
    }
    element = document.createElement('p');
    element.innerHTML = mCHA;
    document.getElementById('chaOutput').innerHTML = element.innerHTML;
}

//Adjust monster on difficulty slider
function generateDifficulty() {
  var difficulty = document.getElementById('difficulty').value;

  if (difficulty == 1) {
    difficulty = "Easy";
    document.getElementById('rounds').value = 1;
  } else if (difficulty == 2) {
    difficulty = "Medium";
    document.getElementById('rounds').value = 3;
  } else if (difficulty == 3) {
    difficulty = "Hard";
    document.getElementById('rounds').value = 5;
  } else if (difficulty == 4) {
    difficulty = "Deadly";
    document.getElementById('rounds').value = 8;
  } else if (difficulty == 5) {
    difficulty = "Very Deadly";
    document.getElementById('rounds').value = 10;
  }

  element = document.createElement('p');
  element.innerHTML = difficulty;
  document.getElementById('difficultyRating').innerHTML = element.innerHTML;

  generateDamage();
  generateHP();
  generateCR();
  generateSize();
}

//Save Data to local Storage
function saveData() {
s=0;

while (s < members) {

  pclassStorage[s] = document.getElementById('pclass' +s).value;
  levelStorage[s] = document.getElementById('level' +s).value;
  hpStorage[s] = document.getElementById('hp' +s).value;
  acStorage[s] = document.getElementById('ac' +s).value;
  ndiceStorage[s] = document.getElementById('ndice' +s).value;
  ddiceStorage[s] = document.getElementById('ddice' +s).value;
  modifierStorage[s] = document.getElementById('modifier' +s).value;


  localStorage.setItem('membersnumber', members);
  localStorage.setItem("memberpclass"+s, pclassStorage[s]);
  localStorage.setItem('memberlevel'+s, levelStorage[s]);
  localStorage.setItem('memberhp'+s, hpStorage[s]);
  localStorage.setItem('memberac'+s, acStorage[s]);
  localStorage.setItem('memberndice'+s, ndiceStorage[s]);
  localStorage.setItem('memberddice'+s, ddiceStorage[s]);
  localStorage.setItem('membermodifier'+s, modifierStorage[s]);

  s++;
}
}

//Load data from local storage
function loadData() {
  var storage = 0;
if (localStorage.getItem('membersnumber') != null) {

  while (localStorage.getItem('membersnumber') > members) {
    duplicate();
  }

  while (s < members) {
  document.getElementById('pclass'+s).value = localStorage.getItem('memberpclass'+s);
  document.getElementById('level'+s).value = localStorage.getItem('memberlevel'+s);
  document.getElementById('hp'+s).value = localStorage.getItem('memberhp'+s);
  document.getElementById('ac'+s).value = localStorage.getItem('memberac'+s);
  document.getElementById('ndice'+s).value = localStorage.getItem('memberndice'+s);
  document.getElementById('ddice'+s).value = localStorage.getItem('memberddice'+s);
  document.getElementById('modifier'+s).value = localStorage.getItem('membermodifier'+s);

  s++;
}

partyVariablesHP2();
partyVariablesAC();
partyVariablesDamage();
}
}
//Clear Local Storage and reload page
function resetData() {
  localStorage.clear();
  location.reload();
}

function generateSpeed() {
  var speed = document.getElementById('speed').value;

  element = document.createElement('p');
  element.innerHTML = speed+" ft.";
  document.getElementById('creaturespeed').innerHTML = element.innerHTML;

}
