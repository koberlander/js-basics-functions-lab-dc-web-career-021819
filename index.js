// Code your solution in this file!
function distanceFromHqInBlocks(blockDestination){
  if (blockDestination >= 42){
   return blockDestination - 42
   }
   else {
     return 42 - blockDestination
   }
}

function distanceFromHqInFeet(blockDestination){
  return distanceFromHqInBlocks(blockDestination) * 264
}

function distanceTravelledInFeet(start, end){
 value = Math.abs(start - end)
 return value * 264
}

function calculatesFarePrice(start, end){
  feet = distanceTravelledInFeet(start, end)
  if (feet < 400) {
    return 0
  }
  else if (feet >= 400 && feet < 2001) {
    return (feet - 400) * 2 /100

  }
  else if (feet >= 2000 && feet < 2500) {
    return 25
  }
  else {
    return 'cannot travel that far'
  }
}
