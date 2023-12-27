let dali = new Image();
dali.src = "r1.png";
dali.onload = () => {
  const canvas = new headbreaker.Canvas("my-canvas", {
    width: 300,
    height: 300,
    image: dali,
    proximity: 10,
    pieceSize: 100,
    borderFill: 10,
    lineSoftness: 0.2,
    image: dali,
    painter: new headbreaker.painters.Konva(),
    outline: new headbreaker.outline.Rounded(),
    preventOffstageDrag: true,
    fixed: true,
  });

  canvas.sketchPiece({
    structure: 'TS--',
    metadata: { id: 'a', targetPosition: { x: 100, y: 100 } },
  });
  canvas.sketchPiece({
    structure: 'SSS-',
    metadata: { id: 'b', targetPosition: { x: 200, y: 100 } },
  });
  canvas.sketchPiece({
    structure: '-ST-',
    metadata: { id: 'c', targetPosition: { x: 300, y: 100 } },
  });
  canvas.sketchPiece({
    structure: 'TT-T',
    metadata: { id: 'd', targetPosition: { x: 100, y: 200 } },
  });
  canvas.sketchPiece({
    structure: 'TSST',
    metadata: { id: 'e', targetPosition: { x: 200, y: 200 } },
  });
  canvas.sketchPiece({
    structure: '-TST',
    metadata: { id: 'f', targetPosition: { x: 300, y: 200 } },
  });
  canvas.sketchPiece({
    structure: 'T--S',
    metadata: { id: 'g', targetPosition: { x: 100, y: 300 } },
  });
  canvas.sketchPiece({
    structure: 'S-ST',
    metadata: { id: 'h', targetPosition: { x: 200, y: 300 } },
  });
  canvas.sketchPiece({
    structure: '--TS',
    metadata: { id: 'i', targetPosition: { x: 300, y: 300 } },
  });

  canvas.shuffle(0.5);
  canvas.draw();

};

let element = document.getElementById('timer');
let min = 0;
let sec = 0;
let timer;

function clock() {
  timer = setInterval(() => {
    element.innerHTML = min + ' : ' + sec;
    sec++;
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
  }, 1000);
}
clock();

function refreshPage() {
  window.location.reload();
}

function checkWin() {
  if (isCompleted(canvas)) {
    clearInterval(timer); // Stop the timer
    alert('Congratulations! You solved the puzzle!');
  } else {
    alert('Keep going! The puzzle is not yet complete.');
  }
}

function isCompleted(canvas){
    
}

function checkEmptySpace() {
  if (hasEmptySpace(canvas)) {
    alert('There is empty space! Puzzle is not yet complete.');
  } else {
    alert('No empty space! Puzzle is complete.');
  }
}
