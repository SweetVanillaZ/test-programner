function sayhello(username,userlastname)
{
    return "hello" + username +" "+userlastname
}
function getact()
{
    return 25
}
let userinput = prompt("input your name:")
alert(sayhello(userinput,"test"))
