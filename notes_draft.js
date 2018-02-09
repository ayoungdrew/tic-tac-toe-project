const picks = [[4, 3, 2, 5], [0, 1, 6]]
const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

const compare = function (playerPoints, winArray) {
  const resultArr = []

  for (let i = 0; i < playerPoints.length; i++) {
    for (let j = 0; j < winArray.length; j++) {
      if (playerPoints[i] === winArray[j]) {
        resultArr.push(playerPoints[i])
      }
    }
  }
  return resultArr.length === 3
}

let checkWin = function () {
  if (compare(picks[0], win[0]) === true || compare(picks[0], win[1]) === true ||
compare(picks[0], win[2]) === true || compare(picks[0], win[3]) === true ||
compare(picks[0], win[4]) === true || compare(picks[0], win[5]) === true ||
compare(picks[0], win[6]) === true || compare(picks[0], win[7]) === true) {
    console.log('X wins!')
  } else if (compare(picks[1], win[0]) === true || compare(picks[1], win[1]) === true ||
compare(picks[1], win[2]) === true || compare(picks[1], win[3]) === true ||
compare(picks[1], win[4]) === true || compare(picks[1], win[5]) === true ||
compare(picks[1], win[6]) === true || compare(picks[1], win[7]) === true) {
    console.log('O wins!')
  }
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
