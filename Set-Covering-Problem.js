const SetOperations = require("./Set-Operations");

let statesToCover = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);
const radioStation = {
  kOne: new Set(["id", "nv", "ut"]),
  kTwo: new Set(["wa", "id", "mt"]),
  kThree: new Set(["or", "nv", "ca"]),
  kFour: new Set(["nv", "ut"]),
  kFive: new Set(["ca", "az"]),
};

function minimumStations() {
  const finalStations = [];

  while (statesToCover.size) {
    let bestStation = null;
    let coveredStates = new Set()
    Object.entries(radioStation).forEach(([station, covered_states]) => {
        const intersectedStates = SetOperations.intersection(statesToCover, covered_states)
        if (intersectedStates.size > coveredStates.size) {
            bestStation = station;
            coveredStates = covered_states;
        }
    });
    finalStations.push(bestStation);
    statesToCover = SetOperations.difference(statesToCover, coveredStates)
  }

  return finalStations
}

console.log(minimumStations())
