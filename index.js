// Code your solution in this file!
const blockFeet = 264
const hqLocationBlock = 42
const price = 2
const flatRate = 25

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    let blocksFromHQ = hqLocationBlock - someValue
    return (Math.abs(blocksFromHQ))
  }

function distanceFromHqInFeet(someValue) {
  return (distanceFromHqInBlocks(someValue)*blockFeet)
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let traveled = (start - destination)*blockFeet
    return (Math.abs(traveled))
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let traveled = distanceTravelledInFeet(start, destination)

    if (traveled >= 2500) {
      return 'cannot travel that far'
    }

    else if (traveled > 2000) {
      return flatRate
    }

    else if (traveled > 400) {
      return ((traveled - 400)*price) / 100
    }

    return 0
}