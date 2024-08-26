let lots = prompt("Input a number : ")
let randoms = Math.floor(Math.random() * 10)
console.log(lots)
document.getElementById("random").innerHTML = randoms

if(lots == randoms){
document.getElementById("lot").innerHTML = "Won the prize"
}
else{
    document.getElementById("lot").innerHTML = "Did not win the prize"
    }

