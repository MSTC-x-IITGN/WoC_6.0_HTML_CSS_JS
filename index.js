var rows = 3;
var columns = 3;
var namee = document.title;
console.log(namee);
var currTile;
var otherTile;
var turns = 0;
let bestTime = Infinity;
// var correctOrder = [];


//Time print Function
let element = document.getElementById('timer');
let min = 0;
let sec = 0;
let timer; // Declare the timer variable
let flag=0;//for timer off
let x = 0 + " : " + 0 ;//store time for print alert

function clock() {
    timer = setInterval(() => {
        element.innerHTML = min + " : " + sec;
        x = element.innerHTML
        sec++;
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
    }, 1000);
}

clock();


window.onload = function () {
  initializeBoard();
  // initializeCorrectOrder();
};

function initializeBoard() {
  // Initialize the 3x3 board
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("img");
      tile.src = "../images/blank2.jpg";

      // DRAG FUNCTIONALITY
      tile.addEventListener("dragstart", dragStart);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("dragenter", dragEnter);
      tile.addEventListener("dragleave", dragLeave);
      tile.addEventListener("drop", dragDrop);
      tile.addEventListener("dragend", dragEnd);

      document.getElementById("board").append(tile);
    }
  }

  // Initialize the pieces
  let pieces = [];
  for (let i = 1; i <= rows * columns; i++) {
    pieces.push(i.toString());
  }
  pieces.reverse();
  for (let i = 0; i < pieces.length; i++) {
    let j = Math.floor(Math.random() * pieces.length);
    // Swap
    let tmp = pieces[i];
    pieces[i] = pieces[j];
    pieces[j] = tmp;
  }

  for (let i = 0; i < pieces.length; i++) {
    let tile = document.createElement("img");
    tile.src = "../images/"+namee + "/" + pieces[i] + ".jpg";

    // DRAG FUNCTIONALITY
    tile.addEventListener("dragstart", dragStart);
    tile.addEventListener("dragover", dragOver);
    tile.addEventListener("dragenter", dragEnter);
    tile.addEventListener("dragleave", dragLeave);
    tile.addEventListener("drop", dragDrop);
    tile.addEventListener("dragend", dragEnd);

    document.getElementById("pieces").append(tile);
  }
}
const correctOrder = ["9","8","7","6","5","4","3","2","1"];

function isCorrectOrder() {
  let currentOrder = [];
  let tiles = document.getElementById("board").getElementsByTagName("img");
  console.log(tiles)
  for (let i = 0; i < tiles.length; i++) {
    let imageName = tiles[i].src.split("/").pop();

    let pieceNumber = parseInt(imageName.split(".")[0]);
    console.log(imageName + "   " + pieceNumber);
    if (!isNaN(pieceNumber)) {
      currentOrder.push(pieceNumber.toString());
    } else {
      console.error("Failed to convert to integer: " + imageName);
    }
  }

  if (
    JSON.stringify(currentOrder) != JSON.stringify(correctOrder) &&
    currentOrder.length == 9
  ) {
    alert("Retry");
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  }
  return JSON.stringify(currentOrder) === JSON.stringify(correctOrder);
}

function dragStart() {
  currTile = this;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {}

function dragDrop() {
  otherTile = this;
}

function dragEnd() {
  if (currTile.src.includes("blank")) {
    return;
  }

  let currImg = currTile.src;
  let otherImg = otherTile.src;
  currTile.src = otherImg;
  otherTile.src = currImg;

  turns += 1;
  document.getElementById("turns").innerText = turns;
  if (isCorrectOrder()) {
    alert("Congratulations! Puzzle solved! \n Your Total Time taken is : "  + x );
    window.location.reload();
  }
}


