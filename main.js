function rules() {
  Swal.fire({
    title: `Rocket beats Scissor
        Scissor beats Paper
        Paper beats Rock
        `,
  });
}
let paper = document.querySelector("#paper");
let rock = document.querySelector("#rock");
let scissor = document.querySelector("#scissor");
// let lives = document.querySelector("#lives");
let you = document.querySelector("#you");
let computer = document.querySelector("#computer");
let computerInt = parseInt(computer.textContent)
rock.onclick = function(){
    const choice = document.querySelectorAll(".choice");
    const randomChoice = choice[Math.floor(Math.random() * choice.length)];
    if (randomChoice.textContent == "Rock") {
        // Draw
    } else if (randomChoice.textContent == "Paper") {
        computer.innerHTML++
        lives.innerHTML--
    } else if (randomChoice.textContent == "Scissor") {
        you.innerHTML++;
    }
}
paper.onclick = function () {

    const choice = document.querySelectorAll(".choice");
    const randomChoice = choice[Math.floor(Math.random() * choice.length)];
    if (randomChoice.textContent == "Rock") {
        you.innerHTML++;
    } else if (randomChoice.textContent == "Paper") {
        // Draw
    } else if (randomChoice.textContent == "Scissor") {
        computer.innerHTML++
        lives.innerHTML--
    }
};
scissor.onclick = function(){
    const choice = document.querySelectorAll(".choice");
    const randomChoice = choice[Math.floor(Math.random() * choice.length)];
    if (randomChoice.textContent == "Rock") {
        computer.innerHTML++
        lives.innerHTML--
    } else if (randomChoice.textContent == "Paper") {
        you.innerHTML++;
    } else if (randomChoice.textContent == "Scissor") {
        // Draw


    }

};

// //
// function getRandomValueFromArray(arr) {
//     return ;
//   }
