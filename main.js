console.log("hello");
let currentPlayer = "X"; // X is the starting player.
let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const cellElementArray = document.querySelectorAll(".grid-cell");

for (
  let elementIndex = 0;
  elementIndex < cellElementArray.length;
  elementIndex++
) {
  const currentCellElement = cellElementArray[elementIndex];

  currentCellElement.addEventListener("click", function (event) {
    const clickedCellElement = event.target;
    if (currentPlayer === "X") {
      clickedCellElement.innerHTML = "X";
      playerXSelections.push(Number(clickedCellElement.id));

      let winResult = checkForWin(winningCombinations, playerXSelections);
      currentPlayer = "O";
    } else {
      clickedCellElement.innerHTML = "O";
      playerOSelections.push(Number(clickedCellElement.id));
      currentPlayer = "X";
    }
    // console.log("X Plays", playerXSelections);
    // console.log("O Plays", playerOSelections);
    // console.log("You clicked on cell number: " + clickedCellElement.id);
  });
}
function checkForWin(winningCombination, playerSelections) {
  for (let i = 0; i < winningCombination.length; i++) {
    let currentCombination = winningCombination[i];
    let matchNumber = 0;
    console.log(winningCombination[i]);

    for (let j = 0; j < winningCombination[i].length; j++) {
      let currentCombination = winningCombination[j];
      console.log(winningCombination[i][j]);
      if (playerSelections.includes(currentCombination[j])) {
        matchNumber++;
      }
    }
    if (matchNumber === 3) {
      return true;
    }
  }
  return false;
}
