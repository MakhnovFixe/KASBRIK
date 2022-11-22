// document.getElementById('jeu').children[8].children[6].style.display = "none";

let ballX = 10;
let dirX = 1;
let ballY = 43;
let dirY = 1;
let move = false;

function start() {

    move = true;

    setTimeout(function() {  
        ballX += (dirX * 0.4);
        ballY += (dirY * 0.3);
        document.getElementById("ball").style.transform = "translate(" + ballX + "vw, "+ ballY +"vh)";
        
        if (ballX > 90 || ballX < 10) {
            dirX *= -1;
        } 

        if (ballY > 96) {
            dirY *= -1;
            } else if (ballY < 43) {
                dirY *= -1;
                document.getElementById('jeu').children[Math.trunc(((ballX -10) / 4))].children[1].style.display = "none";
                console.log(ballX+" "+Math.trunc(((ballX -10) / 4)))
            }
              

        if (move) {           
        start();             
        }

  
    }, 12)
}

function stop() {
    move = false;
}

