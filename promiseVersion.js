let name = 'Bill';

function doSummerChores(name) {
  mowYard(name)
    .then((value) => {
      console.log(value);
      return weedEat(name);
    })
    .then((value) => {
      console.log(value);
      return trimHedges(name);
    })
    .then((value) => {
      console.log(value);
      return collectWood(name);
    })
    .then((value) => {
      console.log(value);
      return waterGarden(name);
    })
    .then((value) => {
      console.log(value);
      console.log(`${name} finished all their chores!`);
    })
    .catch((error) => console.error(error));
}

function mowYard(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${name} mowed the yard.`);
    }, 2000);
  });
}

function weedEat(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let weedChance = 1 + Math.floor(Math.random() * 8);
      if (weedChance > 1) {
        resolve(`${name} finished using the weed eater.`);
      } else {
        reject(`${name} fell asleep after mowing the yard.`);
      }
    }, 1500);
  });
}

function trimHedges(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let trimChance = 1 + Math.floor(Math.random() * 6);
      if (trimChance > 1) {
        resolve(`${name} finished trimming the hedges.`);
      } else {
        reject(`${name} fell asleep after weed eating the yard.`);
      }
    }, 1000);
  });
}
function collectWood(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let collectChance = 1 + Math.floor(Math.random() * 4);
      if (collectChance > 1) {
        resolve(`${name} finished collecting wood.`);
      } else {
        reject(`${name} fell asleep after trimming the hedges.`);
      }
    }, 2500);
  });
}
function waterGarden(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let waterChance = 1 + Math.floor(Math.random() * 6);
      if (waterChance > 1) {
        resolve(`${name} finished watering the garden.`);
      } else {
        reject(`${name} fell asleep after collecting wood.`);
      }
    }, 500);
  });
}

doSummerChores('Bill');
