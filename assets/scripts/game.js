const RESULT = {
  WIN: 1,
  DRAW: 0,
  LOSE: -1,
}

const RESULT_TEXT = {}
RESULT_TEXT[RESULT.WIN] = "Congratulations! You Win!"
RESULT_TEXT[RESULT.DRAW] = "It's a draw. Try again."
RESULT_TEXT[RESULT.LOSE] = "Oops...You lose."

function onWeaponClick(weapon) {
  const cpuWeapon = getCPURandomWeapon();
  cpuWeaponElem.setAttribute("src", WEAPON_IMAGE[cpuWeapon]);

  const result = compareTwoWeapon(weapon, cpuWeapon);
  resultElem.innerText = RESULT_TEXT[result];
}