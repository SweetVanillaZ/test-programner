let lot = prompt("Input a number")
let ran = Math.floor(Math.random() * 1000)
document.getElementById("random").innerHTML = ran
if (lot == ran) {
    document.getElementById("result").innerHTML = "Won the prize"
    
}
else { document.getElementById("result").innerHTML = "Did not win the prize" }