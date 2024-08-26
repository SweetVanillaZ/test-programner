let round = prompt("เล่นกี่รอบ")
let sum = 0
for (var i = 0; i < round; i++) {
    var answer = prompt("หัว หรือ ก้อย")
    var random_answer = ""
    if (Math.floor(Math.random()* 10) <= 4) {
        random_answer = "หัว"
    }
    else { random_answer = "ก้อย" }2
    if (answer == random_answer) {
        alert("ยินดีด้วย")}
    else
            {
                alert("เสียใจด้วย")}
                console.log(random_answer+ ":" +answer
                )
            
            }