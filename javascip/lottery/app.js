let lots = prompt("กรอกเลข : ")
let randoms = Math.floor(Math.random() * 10)
console.log(lots)
document.getElementById("random").innerHTML = randoms

if(lots == randoms){
document.getElementById("lot").innerHTML = "ยินดีด้วย"
}
else{
    document.getElementById("lot").innerHTML = "เสียใจด้วย"
    }

