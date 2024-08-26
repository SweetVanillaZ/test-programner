let qrt = prompt("Number of products")
let sum = 0
for (var i = 1; i <= qrt; i++) {
    let item_price = prompt("Price of item at" + i)
    sum = sum + parseInt(item_price)
    document.getElementById("price-list").innerHTML += "Price of item at" + i + ":"+item_price  + "Baht"+"<br>"
    document.getElementById("sum").innerHTML = "Total price" +sum +"Baht"
    }