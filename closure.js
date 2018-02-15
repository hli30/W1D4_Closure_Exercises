function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let loadedDieIndex = 0;
  let loadedDie = 0;

  let diceFunc = function() {
    loadedDie = list[loadedDieIndex];
    loadedDieIndex++;

    return loadedDie;
  }

  return diceFunc;
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6