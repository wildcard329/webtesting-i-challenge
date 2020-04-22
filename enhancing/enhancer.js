module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  let enhancement = item.enhancement;
  if (enhancement < 20) {
    enhancement++
  }
  return { ...item, enhancement };
}

function fail(item) {
  let enhancement = item.enhancement;
  let durability = item.durability;
  if (enhancement < 15) {
    durability -= 5;
  } else if (enhancement < 17 && enhancement >= 15) {
    durability -= 10;
  } else if (enhancement < 19 && enhancement >= 17) {
    durability -= 10;
    enhancement -= 1;
  }
  return { ...item, durability, enhancement };
}

function repair(item) {
  let durability = item.durability;
  durability = 100;
  return { ...item, durability};
}

function get(item) {
  let name = item.name;
  let enhancement = item.enhancement;
  if(enhancement === 0) {
    name
  } else if (enhancement > 0) {
    name = `[+${enhancement}] ${name}`
  }
  return { ...item, name };
}
