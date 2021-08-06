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

function getCPURandomWeapon() {
  return Math.floor(Math.random() * Object.keys(WEAPON).length);
}

function onWeaponClick(weapon) {
  const cpuWeapon = getCPURandomWeapon();
  cpuWeaponElem.setAttribute("src", WEAPON_IMAGE[cpuWeapon]);
}