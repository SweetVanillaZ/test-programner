function tocelsius(fa) {

    let value = (fa - 32) * 5 / 9
   return value.toFixed(2) + "°C";

}
function display(eleid, value) 
{
document.getElementById(eleid).innerHTML = "<b>" +value + "</b>"

}
function tofal(cel)
{   let value = (cel *9) /5+32
   return value.toFixed(2) + "°F";
}

function tocelsiusprogarm(value)
{alert(tocelsius(value))}

function tofarprogarm(value)
{alert(tofal(value))}


