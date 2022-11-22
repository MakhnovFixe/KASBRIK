// document.getElementById('jeu').children[8].children[6].style.display = "none";

let ballX = 10;
let dirX = 1;
let ballY = 43;
let dirY = 1;
let move = false;
let tabBrik = [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];
let bing;

function start() {

    move = true;

    setTimeout(function() {  
        ballX += (dirX * 0.8);
        ballY += (dirY * 1);
        document.getElementById("ball").style.transform = "translate(" + ballX + "vw, "+ ballY +"vh)";
        
        if (ballX > 90 || ballX < 10) {
            dirX *= -1;
        } 

        if (ballY > 96) {
            dirY *= -1;
            } else if (ballY < 43) {
                bing = (Math.trunc(((ballX -10) / 4)));
                console.log(tabBrik[bing]);
                tabBrik[bing]--;
                console.log(tabBrik+" "+tabBrik[bing]);
                dirY *= -1;
                switch (Math.trunc(((ballX -10) / 4))){
                    case bing :
                        document.getElementById('jeu').children[bing].children[tabBrik[bing]].style.display = "none"; 
                        break;
                }
            }            

        if (move) {           
        start();             
        }

  
    }, 12)
}

function stop() {
    move = false;
}

