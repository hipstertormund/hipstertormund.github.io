var initiative = [];
var combatant = [];
var position = [];
var i = 0;
var count = 0;


function addInit() {
  var k = 0;
  var name1 = document.getElementById('name').value;
  var position1 = document.getElementById('position').value;
  var list = name1+" - "+position1;

  count++;

  while (Number(position1) < Number(position[k])) {
    k++;
  }

  if (Number(position1) > Number(position[k])) {
    position.splice(k, 0, position1);
    combatant.splice(k, 0, name1);
    initiative.splice(k, 0, list);
  } else if (position1 < position[k]) {
    position.push(position1);
    combatant.push(name1);
    initiative.push(list);
  } else {
    position.push(position1);
    combatant.push(name1);
    initiative.push(list);
  }

  element = document.createElement('p');
  element.innerHTML = initiative.join('<br>');
  document.getElementById('results').innerHTML = element.innerHTML;
}

function nextInit() {
  if (count > 1) {
    initiative[count] = initiative[i];
    initiative.shift();
  }

  element = document.createElement('p');
  element.innerHTML = initiative.join('<br>');
  document.getElementById('results').innerHTML = element.innerHTML;
}

function prevInit() {
  if (count > 1) {
    initiative.splice(0, 0, initiative[count-1]);
    initiative.splice(count, 1);
  }

  element = document.createElement('p');
  element.innerHTML = initiative.join('<br>');
  document.getElementById('results').innerHTML = element.innerHTML;
}
