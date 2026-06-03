let name = 'Bill';

doSummerChores(name, () =>
  mowYard(name, () =>
    weedEat(name, () =>
      trimHedges(name, () =>
        collectWood(name, () =>
          waterGarden(name, () =>
            console.log(`${name} finished all their chores!`),
          ),
        ),
      ),
    ),
  ),
);

function doSummerChores(name, callback) {
  callback();
}

function mowYard(name, callback) {
  setTimeout(() => {
    console.log(`${name} mowed the yard.`);
    callback();
  }, 2000);
}

function weedEat(name, callback) {
  let weedChance = 1 + Math.floor(Math.random() * 8);
  if (weedChance > 1) {
    setTimeout(() => {
      console.log(`${name} finished using the weed eater.`);
      callback();
    }, 1500);
  } else {
    console.log(`${name} fell asleep after mowing the yard.`);
  }
}

function trimHedges(name, callback) {
  let trimChance = 1 + Math.floor(Math.random() * 6);
  if (trimChance > 1) {
    setTimeout(() => {
      console.log(`${name} finished trimming the hedges.`);
      callback();
    }, 1000);
  } else {
    console.log(`${name} fell asleep after weed eating the yard.`);
  }
}

function collectWood(name, callback) {
  let collectChance = 1 + Math.floor(Math.random() * 4);
  if (collectChance > 1) {
    setTimeout(() => {
      console.log(`${name} finished collecting wood.`);
      callback();
    }, 2500);
  } else {
    console.log(`${name} fell asleep after trimming the hedges.`);
  }
}

function waterGarden(name, callback) {
  let waterChance = 1 + Math.floor(Math.random() * 3);
  if (waterChance > 1) {
    setTimeout(() => {
      console.log(`${name} finished watering the garden.`);
      callback();
    }, 500);
  } else {
    console.log(`${name} fell asleep after collecting wood.`);
  }
}
