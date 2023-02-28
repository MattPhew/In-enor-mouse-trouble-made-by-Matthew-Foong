//In-game information.
let playerHealth = 100;
let enemyHealth = 100;
let stage = 1;
//Slash does 50 damage; 
//Bite does 20 damage;
//Cheese heals you by 10;
// References. 
let context = document.querySelector('.context');
let image = document.querySelector('img');
let choiceOne = document.querySelector('.choiceOne');
let choiceTwo = document.querySelector('.choiceTwo');
let choiceThree = document.querySelector('.choiceThree');
let healthOne = document.querySelector('.healthOne');
let healthTwo = document.querySelector('.healthTwo');

//Stage one.
choiceOne.onclick = function() {
  console.log('working');
  if (stage === 1) {
    console.log('choiceOne stage one works.');
    image.src = 'images/mouseRun.png';
    context.innerHTML = 'You make a run for it. You eventually got away and found your friends.';
    choiceOne.innerHTML = '🏃 Guys we have to run for it!';
    choiceTwo.style.display = 'inline'; //Make appear.
    choiceTwo.innerHTML = '🥳 I got the cheese!';
    stage = 2;
  } //Stage Two.
  else if (stage === 2) {
    console.log('choiceOne stage two works.');
    image.src = 'images/danger.png';
    context.innerHTML = 'You and you friends run for it, but got caught. You must fight.';
    choiceTwo.style.display = 'none'; //Make dissappear.
    choiceOne.innerHTML = '🛡️ Continue';
    stage = 3;
  }
  else if (stage === 3) {
    console.log('choiceOne stage three works.');
    image.src = 'images/fight.png';
    choiceOne.innerHTML = '⚔️ Slash';
    choiceTwo.style.display = 'inline';
    choiceTwo.innerHTML = '🩸 Bite';
    choiceThree.style.display = 'inline';
    choiceThree.innerHTML = '🧀 Eat some cheese.';
    healthOne.style.display = 'block';
    healthTwo.style.display = 'block';
    stage = 4;
  }
  else if (stage === 4) {
    if (enemyHealth - 10 > 0) {
      //Slash move.
      context.innerHTML = 'You slashed your opponent!... it was not very effective.';
      enemyHealth = enemyHealth - 10;
      healthTwo.innerHTML = 'Enemy health: ' + enemyHealth;
      playerHealth = playerHealth - 5;
      healthOne.innerHTML = 'Health: ' + playerHealth;
    }
    else if (enemyHealth - 10 <= 0) {
      enemyHealth = 0;
      healthTwo.innerHTML = 'Enemy health:' + enemyHealth;
      context.innerHTML = 'You won! You and your friends celebrate by eating the rest of the cheese.';
      image.src = 'images/victory.png';
      choiceOne.style.display = 'none';
      choiceTwo.style.display = 'none';
      choiceThree.style.display = 'none';
      healthOne.style.display = 'none';
      healthTwo.style.display = 'none';
    }
  }
}

choiceTwo.onclick = function() {
  if (stage === 2) {
    console.log('choiceTwo stage two works.');
    image.src = 'images/danger.png';
    context.innerHTML = 'You and you friends run for it, but got caught. You must fight.';
    choiceOne.style.display = 'none'; //Make dissappear.
    choiceTwo.innerHTML = '🛡️ Continue';
    stage = 3;
  }
  else if (stage === 3) {
    console.log('choiceOne stage three works.');
    image.src = 'images/fight.png';
    choiceOne.style.display = 'inline';
    choiceOne.innerHTML = '⚔️ Slash';
    choiceTwo.innerHTML = '🩸 Bite';
    choiceThree.style.display = 'inline';
    choiceThree.innerHTML = '🧀 Eat some cheese';
    healthOne.style.display = 'block';
    healthTwo.style.display = 'block';
    stage = 4;
  }
  else if (stage === 4) {
    if (enemyHealth - 40 > 0) {
      //Bite move.
      context.innerHTML = 'You bit your opponent!... it was very effective!';
      enemyHealth = enemyHealth - 40;
      healthTwo.innerHTML = 'Enemy health: ' + enemyHealth;
      playerHealth = playerHealth - 10;
      healthOne.innerHTML = 'Health: ' + playerHealth;
    }
    else if (enemyHealth - 40 <= 0) {
      enemyHealth = 0;
      healthTwo.innerHTML = 'Health : ' + enemyHealth;
      context.innerHTML = 'You won! You and your friends celebrate by eating the rest of the cheese.';
      image.src = 'images/victory.png';
      choiceOne.style.display = 'none';
      choiceTwo.style.display = 'none';
      choiceThree.style.display = 'none';
      healthOne.style.display = 'none';
      healthTwo.style.display = 'none';
    }
  }
}

choiceThree.onclick = function() {
  if (enemyHealth > 0) {
    if (playerHealth <= 80) {
      context.innerHTML = 'You ate some of the delicious cheese!... You healed some health!';
      playerHealth = playerHealth + 20;
      healthTwo.innerHTML = 'Enemy health: ' + enemyHealth;
      playerHealth = playerHealth - 5;
      healthOne.innerHTML = 'Health: ' + playerHealth;
    }
    else if (playerHealth > 80) {
      context.innerHTML = 'You cannot eat cheese because you are too full!';
    }
  }
}