
var w = window.innerWidth;
var h = window.innerHeight - 40;
let dali = new Image();
dali.src = "img.webp";
    dali.onload = () => {
        const canvas = new headbreaker.Canvas("my-canvas", {
        width: 350,
        height: 350,
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
        // canvas.autogenerate({
        //     horizontalPiecesCount: 3,
        //     verticalPiecesCount: 3,
        // });
        canvas.shuffle(0.5);
        canvas.draw();   
};


let element = document.getElementById('timer');
let min = 0;
let sec = 0;
function clock(){
    
    timer = setInterval(() => {
        element.innerHTML = min + " : " + sec;
        sec++;
        if(sec == 60){
            min = min + 1;
            
            sec=0;
        }
    },1000);
}
clock();


function refreshPage(){
    window.location.reload();
} 
  
function checkSolved() {
    const pieces = canvas.pieces(); // Retrieve all puzzle pieces
  
    for (const piece of pieces) {
      const currentPosition = piece.position();
      const targetPosition = piece.metadata.targetPosition;
  
      // Check for exact position match, considering both x and y coordinates
      if (currentPosition.x !== targetPosition.x || currentPosition.y !== targetPosition.y) {
        return false; // Not solved if any piece is not in its target position
      }
    }
  
    return true; // All pieces are in their target positions, puzzle is solved!
  }
  
  // Call the checkSolved function periodically to check for completion
  
  // When the puzzle is solved, stop the timer and display a message
  checkInterval.unref(); // Prevent interval from blocking program exit
  checkSolved(); // Check for completion immediately
  
  if (checkSolved()) {
      clearInterval(timer); // Stop the timer
      alert("Congratulations! You solved the puzzle!");
    }
    const checkInterval = setInterval(checkSolved, 500); // Check every 500 milliseconds