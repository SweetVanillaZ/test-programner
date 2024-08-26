let lot = prompt("กรอกเลข")
let ran = Math.floor(Math.random() * 1000)
document.getElementById("random").innerHTML = ran
if (lot == ran) {
    document.getElementById("result").innerHTML = "ยินดีด้วย"
    
}
else { document.getElementById("result").innerHTML = "เสียใจด้วย" }