const RESULT_TEXT = {}
RESULT_TEXT[RESULT.WIN] = "Congratulations! You Win!"
RESULT_TEXT[RESULT.DRAW] = "It's a draw. Try again."
RESULT_TEXT[RESULT.LOSE] = "Oops...You lose."

const WAITING_TEXT = "CPU is picking a weapon..."

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function onWeaponClick(weapon) {
  resultElem.innerText = WAITING_TEXT;
  playerWeaponElem.setAttribute("src", WEAPON_IMAGE[weapon]);
  let cpuWeapon;

  // Sleep in loop
  for (let i = 0; i < 50; i++) {
    cpuWeapon = getCPURandomWeapon();
    cpuWeaponElem.setAttribute("src", WEAPON_IMAGE[cpuWeapon]);
    await sleep(30);
  }

  const result = compareTwoWeapon(weapon, cpuWeapon);
  resultElem.innerText = RESULT_TEXT[result];
}