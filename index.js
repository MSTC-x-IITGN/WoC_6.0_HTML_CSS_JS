
var w = window.innerWidth;
var h = window.innerHeight - 40;
let dali = new Image();
dali.src = "l1.avif";
    dali.onload = () => {
        const canvas = new headbreaker.Canvas("my-canvas", {
        width: w,
        height: h,
        image: dali,
        pieceSize: 100,
        borderFill: 10,
        painter: new headbreaker.painters.Konva(),
    });
        canvas.autogenerate({
            horizontalPiecesCount: 3,
            verticalPiecesCount: 3,
        });
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
