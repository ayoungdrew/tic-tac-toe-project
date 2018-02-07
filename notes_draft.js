let boardArray = [1,2,3,4,5,6,7,8,9]

[1,2,3]
[4,5,6]
[7,8,9]
[1,4,7]
[2,5,8]
[3,6,9]
[1,5,9]
[3,5,7]

const arrContIncluded = function (playerPoints, arrayB) {
  const resultArr = []

  for (let i = 0; i < playerPoints.length; i++) {
    for (let j = 0; j < arrayB.length; j++) {
      if (playerPoints[i] === arrayB[j]) {
        resultArr.push(playerPoints[i])
      }
    }
  }
  return resultArr.length === 3
}









//
// function destroyer(arr) {
//   var args = Array.prototype.slice.call(arguments);
//
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < args.length; j++) {
//       if (arr[i] === args[j]) {
//         delete arr[i];
//       }
//     }
//   }
//   return arr.filter(Boolean);
// }
