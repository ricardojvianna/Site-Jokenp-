// parte do letreiro
const appearDisappear = () => {

    const logo1 = document.querySelector("h1")
    const logo2 = document.querySelector("h2")

    if (logo1.style.opacity == 1) {
        logo2.style.opacity = 1
        logo1.style.opacity = 0
    }

    else {
        logo1.style.opacity = 1
        logo2.style.opacity = 0
    }

}

setInterval(() => {
    appearDisappear()
}, 2000);


// parte dos botões, escolha do humano
const playHuman = (humanChoice) => {
    const songPlay = document.querySelector(".song-play")
    songPlay.play()
    decisionTheGame(humanChoice, playMachine())
    // toda vez que o humano clicar no botão fazendo sua escolha,
    // a função decisionTheGame, vai ser chamada e vai receber os valores
    // das funções do playHuman e do playMachine e jogar, mostrando assim
    // qual foi a escolha de cada jogador.

}


//botão reiniciar o jogo
const restartScore = () => {
    const songRestart = document.querySelector(".song-restart")
    songRestart.play()
    
    humanScoreNumber = 0
    machineScoreNumber = 0

    document.querySelector("#human-score").innerHTML = humanScoreNumber
    document.querySelector("#machine-score").innerHTML = machineScoreNumber

/* 

Como humanScoreNumber e machineScoreNumber já são variáveis globais,
a função restartScore() pode acessá-las diretamente e redefini-las
para 0 sem precisar receber nenhum parâmetro.

A confusão aconteceu porque, ao passar os valores como argumentos
para restartScore(humanScoreNumber, machineScoreNumber), 
você só estava enviando cópias dos números, e não as variáveis originais.
Então, mesmo zerando dentro da função, isso não afetava os valores globais.
*/    

}


// parte do sorteio com Math.random, escolha da máquina
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    // ele gera um número aleatório entra 0 e 1, ex:
    // 0.9 * 3 == 2.7 arredonda pra baixo == 2
    // 0.6 * 3 == 1.8 arredonda pra baixo == 1
    // 0.3 * 3 == 0.9 arredonda pra baixo == 0
    // são as 3 posições que o array tem com os valores do jogo

    return choices[randomNumber]
    // ele vai receber por sorteio e aproximação para baixo os valores do array,
    //  que equivale à: pedra, papel e tesoura.

}


// parte que mostra o resultado da disputa entre o humano e a máquina
const resultGame = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")
let humanScoreNumber = 0
let machineScoreNumber = 0


const decisionTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' / ' + 'Máquina: ' + machine)
    
    if (human === machine) { // deu empate
        resultGame.innerHTML = "Deu Empate!"
    } else if ( // humano ganha da máquina.
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        resultGame.innerHTML = "O Humano Venceu!"
        return humanScoreNumber

    } else { // humano perde da máquina.
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        resultGame.innerHTML = "O Android Venceu!"
        return machineScoreNumber
    }
    
}

/* 

Regra do jogo:

-- Papel ->(ganha de) Pedra          Papel -> Pedra -> Tesoura
-- Papel ->(perde de) Tesoura
-- Papel ->(empata com) Papel

-- Pedra ->(ganha de) Tesoura        Pedra -> Tesoura -> Papel
-- Pedra ->(perde de) Papel          
-- Pedra ->(empata com) Pedra

-- Tesoura ->(ganha de) Papel        Tesoura -> Papel -> Pedra
-- Tesoura ->(perde de) Pedra
-- Tesoura ->(empata com) Tesoura

*/
