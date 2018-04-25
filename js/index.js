function dice_roll(){
    n = Math.floor((Math.random()*6) + 1);
    change_die(n);
}

function change_die(n){
  document.getElementById('dice1').src="images/perspective-dice-" + n + ".svg";
}
