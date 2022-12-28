function rectangularCollision({
    rectangle1, rectangle2
}) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
    rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  )
}

// function image(thisImg){
//   var img = document.createElement("IMG");
//   img.src = "./img/"+thisImg;
//   document.getElementById('image').appendChild(img)
// }

function determineWinner({player, enemy, timerId}) {
    clearTimeout(timerId)
    // document.querySelector('#image').style.display = 'flex'
    // document.querySelector('#image').style.justifycontent = 'center'
    // document.querySelector('#image').style.placeitems = 'center'
    // document.querySelector('#image').style.position = 'absolute'
    if (player.health === enemy.health){
      document.getElementById('image').innerHTML = '<img src="./img/tie.png" />';
    }
    else if (player.health > enemy.health){
      document.getElementById('image').innerHTML = '<img src="./img/p1w.png" />';
    } else if (player.health < enemy.health){
      document.getElementById('image').innerHTML = '<img src="./img/p2w.png" />';
    }
}

let timer = 60
let timerId
function decreaseTimer(){
    if (timer > 0) {
      timerId = setTimeout(decreaseTimer, 1000)
      timer--
      document.querySelector('#timer').innerHTML = timer
    }

    if (timer === 0) {
        determineWinner({player, enemy, timerId})
}
}