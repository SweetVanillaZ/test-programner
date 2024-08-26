let score = prompt("ใส่เกรดของคุณ : ")
if (score >= 90) {
    document.getElementById("res").innerHTML = "A"
} else if (score >= 80) {
    document.getElementById("res").innerHTML = "B"
}else if (score >= 70) {
    document.getElementById("res").innerHTML = "C"
}
else if (score >= 60) {
    document.getElementById("res").innerHTML = "D"
}else if (score < 59) {
    document.getElementById("res").innerHTML = "F"
}