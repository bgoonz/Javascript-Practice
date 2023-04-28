//write a program to create a string that represents a 8x 8 chess board, at each position there should either be a space or a #...

function chessBoard() {
  const line1 = " # # # #\n";
  const line2 = "# # # # \n";
  let finalString = "";
  for (i = 1; i < 8; i++) {
    if (i % 2 !== 0) {
      finalString += line1;
    } else {
      finalString += line2;
    }
  }
  console.log(finalString);
}
chessBoard();
