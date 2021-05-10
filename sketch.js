var database=firebase.database();
var player1, player2;
var a=25;
function setup(){
    createCanvas(windowWidth-a, windowHeight-a);
}

function draw(){
    noStroke();
    fill(0)
    database.ref('player1').on('value', function(data){
        player1=data.val();
        ellipse(player1.x, player1.y, 5, 5)
    })

    database.ref('player2').on('value', function(data){
        player2=data.val();
        ellipse(player2.x, player2.y, 5, 5)
    })
    
    database.ref('player1').set({
        x:mouseX,
        y:mouseY
    })
}