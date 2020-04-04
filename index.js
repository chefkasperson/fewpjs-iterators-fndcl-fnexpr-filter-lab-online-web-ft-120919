// Code your solution here
function findMatching(drivers, search) {
  return drivers.filter( driver => driver.toLowerCase() === search.toLowerCase())
}

function fuzzyMatch(drivers, search) {
  return drivers.filter( driver => driver.toLowerCase().indexOf(search.toLowerCase()) === 0)
}

function matchName(drivers, search) {
  return drivers.filter( driver => driver.name === search)
}