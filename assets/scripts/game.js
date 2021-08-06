const cpuWeaponElem = document.getElementById('cpu_weapon');

const WEAPON = {
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2,
};

const WEAPON_IMAGE = {};
WEAPON_IMAGE[WEAPON.ROCK] = "assets/images/rock.png";
WEAPON_IMAGE[WEAPON.PAPER] = "assets/images/paper.png";
WEAPON_IMAGE[WEAPON.SCISSORS] = "assets/images/scissors.png";

const RESULT = {
  WIN: 1,
  DRAW: 0,
  LOSE: -1,
}

// Create table which defines whether a weapon is superior to another one or not.
const WEAPON_SUPERIORITY_TABLE = {};
WEAPON_SUPERIORITY_TABLE[`${WEAPON.ROCK},${WEAPON.ROCK}`] = RESULT.DRAW;
WEAPON_SUPERIORITY_TABLE[`${WEAPON.ROCK},${WEAPON.PAPER}`] = RESULT.LOSE;
WEAPON_SUPERIORITY_TABLE[`${WEAPON.ROCK},${WEAPON.SCISSORS}`] = RESULT.WIN;

WEAPON_SUPERIORITY_TABLE[`${WEAPON.PAPER},${WEAPON.ROCK}`] = RESULT.WIN;
WEAPON_SUPERIORITY_TABLE[`${WEAPON.PAPER},${WEAPON.PAPER}`] = RESULT.DRAW;
WEAPON_SUPERIORITY_TABLE[`${WEAPON.PAPER},${WEAPON.SCISSORS}`] = RESULT.LOSE;

WEAPON_SUPERIORITY_TABLE[`${WEAPON.SCISSORS},${WEAPON.ROCK}`] = RESULT.LOSE;
WEAPON_SUPERIORITY_TABLE[`${WEAPON.SCISSORS},${WEAPON.PAPER}`] = RESULT.WIN;
WEAPON_SUPERIORITY_TABLE[`${WEAPON.SCISSORS},${WEAPON.SCISSORS}`] = RESULT.DRAW;

function getCPURandomWeapon() {
  return Math.floor(Math.random() * Object.keys(WEAPON).length);
}

function compareTwoWeapon(weapon1, weapon2) {
  return WEAPON_SUPERIORITY_TABLE[`${weapon1},${weapon2}`];
}

function onWeaponClick(weapon) {
  const cpuWeapon = getCPURandomWeapon();
  cpuWeaponElem.setAttribute("src", WEAPON_IMAGE[cpuWeapon]);

  console.log(compareTwoWeapon(weapon, cpuWeapon));
}