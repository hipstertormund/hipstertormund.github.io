var no = 0;
var yes = 0;
var no1 = 0;
var yes1 = 0;

function typeSelect() {
  var type = document.getElementById('type').value;
  var attunement = document.getElementById('attunementSelect');
  var pclassSpecific = document.getElementById('pclassSpecific');
  var pclassSelect = document.getElementById('pclassSelect');
  var weaponSelect = document.getElementById('weaponSelect');
  var armorSelect = document.getElementById('armorSelect');
  var itemSelect = document.getElementById('itemSelect');
  var consummableSelect = document.getElementById('consummableSelect');
  var damageBonuses = document.getElementById('damageBonuses');
  var addDamagedice = document.getElementById('addDamagedice');
  var acBonuses = document.getElementById('acBonuses');
  var skillBonuses = document.getElementById('skillBonuses');
  var output = document.getElementById('column2');

  if (type == 'Weapon') {
    attunement.style.display = 'block';
    pclassSpecific.style.display = 'block';
    pclassSelect.style.display = 'block';
    weaponSelect.style.display = 'block';
    armorSelect.style.display = 'none';
    itemSelect.style.display = 'none';
    consummableSelect.style.display = 'none';
    damageBonuses.style.display = 'block';
    addDamagedice.style.display = 'block';
    acBonuses.style.display = 'none';
    skillBonuses.style.display = 'none';
    output.style.display = 'block';
  } else if (type == 'Armor') {
    attunement.style.display = 'block';
    pclassSpecific.style.display = 'block';
    pclassSelect.style.display = 'block';
    weaponSelect.style.display = 'none';
    armorSelect.style.display = 'block';
    itemSelect.style.display = 'none';
    consummableSelect.style.display = 'none';
    damageBonuses.style.display = 'none';
    addDamagedice.style.display = 'none';
    acBonuses.style.display = 'block';
    skillBonuses.style.display = 'none';
    output.style.display = 'block';
  } else if (type == 'Item') {
    attunement.style.display = 'block';
    pclassSpecific.style.display = 'block';
    pclassSelect.style.display = 'block';
    weaponSelect.style.display = 'none';
    armorSelect.style.display = 'none';
    itemSelect.style.display = 'block';
    consummableSelect.style.display = 'none';
    damageBonuses.style.display = 'block';
    addDamagedice.style.display = 'block';
    acBonuses.style.display = 'block';
    skillBonuses.style.display = 'block';
    output.style.display = 'block';
  } else if (type == 'Consummable') {
    attunement.style.display = 'none';
    pclassSpecific.style.display = 'none';
    pclassSelect.style.display = 'none';
    weaponSelect.style.display = 'none';
    armorSelect.style.display = 'none';
    itemSelect.style.display = 'none';
    consummableSelect.style.display = 'block';
    damageBonuses.style.display = 'none';
    addDamagedice.style.display = 'none';
    acBonuses.style.display = 'none';
    skillBonuses.style.display = 'none';
    output.style.display = 'block';
  } else if (type == 'null') {
    attunement.style.display = 'none';
    pclassSpecific.style.display = 'none';
    pclassSelect.style.display = 'none';
    weaponSelect.style.display = 'none';
    armorSelect.style.display = 'none';
    itemSelect.style.display = 'none';
    consummableSelect.style.display = 'none';
    damageBonuses.style.display = 'none';
    addDamagedice.style.display = 'none';
    acBonuses.style.display = 'none';
    skillBonuses.style.display = 'none';
    output.style.display = 'none';
  }

  element = document.createElement('p');
  element.innerHTML = 'Item Type: '+type;
  document.getElementById('itemType').innerHTML = element.innerHTML;
}

function attunementSelect() {
  var attunementYes = document.getElementById('attunementYes');
  var attunementNo = document.getElementById('attunementNo');

  if (attunementYes.checked == false && attunementNo.checked == false) {
    var attunementStatus = "";
  } else if (attunementYes.checked == false && attunementNo.checked == true) {
    var attunementStatus = "";
    no++;
    yes=0;
  } else if (attunementYes.checked == true && attunementNo.checked == false) {
    var attunementStatus = "Requires Attunement";
    yes++;
    no=0;
  } else if (attunementYes.checked == true && attunementNo.checked == true) {
    if (yes > no) {
      attunementNo.checked = true;
      attunementYes.checked = false;
      var attunementStatus = "";
      yes=0;
      no++;
    } else if (yes < no) {
      attunementYes.checked = true;
      attunementNo.checked = false;
      var attunementStatus = "Requires Attunement";
      no=0;
      yes++;
    }
  }

  element = document.createElement('h3');
  element.innerHTML = attunementStatus;
  document.getElementById('attunementStatus').innerHTML = element.innerHTML;

}

function classSelect() {
  var classYes = document.getElementById('classYes');
  var classNo = document.getElementById('classNo');
  var pclass = document.getElementById('pclass').value;

    if (classYes.checked == false && classNo.checked == false) {
      var classStatus = "";
    } else if (classYes.checked == false && classNo.checked == true) {
      var classStatus = "";
      no1++;
      yes1=0;
    } else if (classYes.checked == true && classNo.checked == false) {
      var classStatus = "by a "+pclass;
      yes1++;
      no1=0;
    } else if (classYes.checked == true && classNo.checked == true) {
      if (yes1 > no1) {
        classNo.checked = true;
        classYes.checked = false;
        var classStatus = "";
        yes1=0;
        no1++;
      } else if (yes1 < no1) {
        classYes.checked = true;
        classNo.checked = false;
        var classStatus = "by a "+pclass;
        no1=0;
        yes1++;
      }
    }

    if (pclass == 'null') {
      var classStatus = "";
    }


    element = document.createElement('p');
    element.innerHTML = classStatus;
    document.getElementById('attunementClass').innerHTML = element.innerHTML;

}
