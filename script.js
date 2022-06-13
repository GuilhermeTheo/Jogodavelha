let text = document.getElementById('cima')
var player = 'p1'
let veia = document.getElementsByClassName('jogo');

function jdveia(valor) {
    if (player == "p1") {
        if (valor == 1) {
            veia[0].innerText = "X"
        } else if (valor == 2) {
            veia[1].innerText = "X"
        } else if (valor == 3) {
            veia[2].innerText = "X"
        } else if (valor == 4) {
            veia[3].innerText = "X"
        } else if (valor == 5) {
            veia[4].innerText = "X"
        } else if (valor == 6) {
            veia[5].innerText = "X"
        } else if (valor == 7) {
            veia[6].innerText = "X"
        } else if (valor == 8) {
            veia[7].innerText = "X"
        } else if (valor == 9) {
            veia[8].innerText = "X"
        }
        
        trocaJogadores()
    } else {
        if (valor == 1) {
            veia[0].innerText = "O"
        } else if (valor == 2) {
            veia[1].innerText = "O"
        } else if (valor == 3) {
            veia[2].innerText = "O"
        } else if (valor == 4) {
            veia[3].innerText = "O"
        } else if (valor == 5) {
            veia[4].innerText = "O"
        } else if (valor == 6) {
            veia[5].innerText = "O"
        } else if (valor == 7) {
            veia[6].innerText = "O"
        } else if (valor == 8) {
            veia[7].innerText = "O"
        } else if (valor == 9) {
            veia[8].innerText = "O"
        }
        trocaJogadores()
    }
    vencedor()
}
    
    function vencedor(){
        if (veia[0].innerText =="X" && veia[4].innerText=="X" && veia[8].innerText=="X"){
            text.innerHTML="Player1 venceu"
        }else if (veia[0].innerText =="X" && veia[1].innerText== "X" && veia[2].innerText =="X"){
            text.innerHTML="Player1 venceu"
        }else if (veia[2].innerText =="X" && veia[4].innerText== "X" && veia[6].innerText =="X"){
            text.innerHTML="Player1 venceu"
        }else if (veia[2].innerText =="X" && veia[5].innerText== "X" && veia[8].innerText =="X"){
            text.innerHTML="Player1 venceu"
        }else if (veia[0].innerText =="X" && veia[3].innerText== "X" && veia[6].innerText =="X"){
                text.innerHTML="Player1 venceu"
        }else if (veia[1].innerText =="X" && veia[4].innerText== "X" && veia[7].innerText =="X"){
                text.innerHTML="Player1 venceu"
        }else if (veia[6].innerText =="X" && veia[7].innerText== "X" && veia[8].innerText =="X"){
            text.innerHTML="Player1 venceu"
        }else if (veia[3].innerText =="X" && veia[4].innerText== "X" && veia[5].innerText =="X"){
            text.innerHTML="Player1 venceu"
        }else if (veia[0].innerText =="O" && veia[4].innerText=="O" && veia[8].innerText=="O"){
        text.innerHTML="Player2 venceu"
    }else if (veia[0].innerText =="O" && veia[1].innerText== "O" && veia[2].innerText =="O"){
        text.innerHTML="Player2 venceu"
    }else if (veia[2].innerText =="O" && veia[4].innerText== "O" && veia[6].innerText =="O"){
        text.innerHTML="Player2 venceu"
    }else if (veia[2].innerText =="O" && veia[5].innerText== "O" && veia[8].innerText =="O"){
        text.innerHTML="Player2 venceu"
    }else if (veia[0].innerText =="O" && veia[3].innerText== "O" && veia[6].innerText =="O"){
            text.innerHTML="Player2 venceu"
    }else if (veia[1].innerText =="O" && veia[4].innerText== "O" && veia[7].innerText =="O"){
            text.innerHTML="Player2 venceu"
    }else if (veia[6].innerText =="O" && veia[7].innerText== "O" && veia[8].innerText =="O"){
        text.innerHTML="Player2 venceu"
    }else if (veia[3].innerText =="O" && veia[4].innerText== "O" && veia[5].innerText =="O"){
        text.innerHTML="Player2 venceu"
 }
}      
            
    


function zerar() {
    for (var i = 0; i < 9; i++) {
        veia[i].innerText = "";
        text.innerHTML="Player1 = X  Player2 = O"
    };
}

function trocaJogadores() {
    if (player === "p1") {
        player = "p2";
    } else if (player === "p2")
        player = "p1"
 }
