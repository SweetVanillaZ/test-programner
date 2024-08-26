let round = prompt("How many rounds to play")
let sum = 0
for (var i = 0; i < round; i++) {
    var answer = prompt("Heads or tails?")
    var random_answer = ""
    if (Math.floor(Math.random()* 10) <= 4) {
        random_answer = "Heads"
    }
    else { random_answer = "tails" }2
    if (answer == random_answer) {
        alert("Correct guess")}
    else
            {
                alert("Incorrect guess")}
                console.log(random_answer+ ":" +answer
                )
            
            }