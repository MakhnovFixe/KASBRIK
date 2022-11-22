// document.getElementById('jeu').children[8].children[6].style.display = "none";

let ballX = 0;
let ballY = 35;
let move = false;

function start() {

    move = true;

    setTimeout(function() {  
        ballX += 1;
        ballY += 1;
        document.getElementById("ball").style.transform = "translate(" + ballX + "vw, "+ ballY +"vh)";

        if (ballX > 48 && move) {           
        start();             
        }

    }, 100)
}

function stop() {
    move = false;
}

