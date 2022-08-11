// Code your solution here

// function findMatching(collection, name) {
//   const newCollection = [];
//   for (const drivers of collection) {
//     if (drivers.toLowerCase() === name.toLowerCase()) {
//       newCollection.push(drivers);
//     }
//   }
// }


function findMatching(collection, driver){
    return collection.filter(name => name.toLowerCase() === driver.toLowerCase());
}

function fuzzyMatch(collection, driverLetter){
    return collection.filter(firstLetter => firstLetter[0] === driverLetter[0]);
}

function matchName(collection, driverObj){
    return collection.filter(driver => driver.name === driverObj);
}
