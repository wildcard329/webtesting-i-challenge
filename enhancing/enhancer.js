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
  return { ...item };
}

function repair(item) {
  let durability = item.durability;
  durability = 100;
  return { ...item, durability};
}

function get(item) {
  return { ...item };
}
