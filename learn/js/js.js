//alert("hello")

var x = 10
console.log(x)
var x;
let y;
const z = 15;
x = 10;
y = x;
console.log(x, "", y, "", z);
x = 20;

var fristname = "Sweet";
var lastname = "Vanilla";
var a = "20";
var b = "10";

console.log(fristname + lastname);
console.log(fristname + x);
console.log(a + b);
console.log(parseInt(a) + parseInt(b));
console.log(parseInt(a) * parseInt(b));
console.log(parseInt(a) / parseInt(b));
console.log(parseInt(a) - parseInt(b));

x++;
x = x + 1;
x--;
x = x - 1;
console.log(x);
console.log(x % 3);
x += x;
x = x + x;
console.log(x);


//////////////////////////////////////
////////////data type////////////////
/////////////////////////////////////

var xx = 123;
var yy = "Hello";
var zz = xx == yy; //true, false
var ar = ["red", "green", "blue"];
console.log(typeof xx);
console.log(typeof yy);
console.log(zz, typeof zz);
console.log(ar);
console.log(ar.length);
ar.push("black");
console.log(ar);
var obj = {
    name: "Sweet",
    lastname: "Vanilla"
};
console.log(obj, obj.lastname);
console.log(obj["name"]);
obj.age = 20;
console.log(obj);
var un = undefined;
var nu = null;
console.log(typeof un);
console.log(typeof nu);
console.log(un == nu);
console.log(un === nu);

///////////////////////////
//////////function/////////
///////////////////////////

function plus(x, y) { return x + y; }
var r = plus(10, 20)
console.log("result", r)
function log(data) { console.log(data); return; }

function plus2(x, y) { return plus(x, y) }
function area(w, h, t) {
    if (t == "square") return w * h
    else return Math.PI * x * x
}
log(plus2(3, 4))
log(area(10, 10, "square"))
log(area(10))

/////////////////////////////////////////////////
////////////////////Array//////////////////////
////////////////////////////////////////////////

var myarr = ["string", 123, { text: 'test' }, ['test']]
var myarr2 = new Array('string', 123, { text: "test" });
console.log(myarr2)

console.log(myarr[0]);

for (let i = 0; i < myarr.length; i++) {
    console.log("index: " + i, myarr[i]);
}
myarr[4] = "test test"
//log(myarr);

myarr.push("test index 5")
//log(myarr);

myarr.pop();
//log(myarr);

myarr.unshift("test add 0 index");
log(myarr);

myarr.shift();
log(myarr);

//myarr.map((myval,index)=>{console.log('this is index' + index, " =", myval)});

var myarr3 = [
    { name: "test1" },
    { name: "test2" },
    { name: "test3" },
    { name: "test4" },
    { name: "test5" }

]
var mynewarr3 = myarr3.map(function (val, ind) { return val.name; });
console.log(mynewarr3);
myarr3.forEach((val, ind) => {
    console.log(ind, " = ", val);
});

/////////////////////////////////////////////////
////////////////////bject//////////////////////
////////////////////////////////////////////////
var myobj = {};
var myobj2 = new Object();
console.log("type of myoby", typeof myobj);
console.log("type of myoby2", typeof myobj2);

myobj.name = "google"
myobj.lastname = "google.com"
myobj.lastname = "30"
console.log("myobj.name:", myobj.name);
console.log("myobj[name]:", myobj["name"]);

myobj.nameLength = function () {
    return this.name.length
};
myobj.name = "jenny"
myobj["name"] = "jackkkkkkk"
myobj["age"] = "23"

console.log(myobj.nameLength());
console.log("before", myobj)
delete myobj.lastname;
delete myobj["age"];
console.log("after", myobj)

/////////////////////////////////////////////////
////////////////////if else for//////////////////////
////////////////////////////////////////////////

var test1 = [{ x: 13, y: 14 },
{ x: 83, y: 54 },
{ x: 53, y: 76 },
{ x: 9, y: 13 },
]
test1.forEach((val) => {
    if (val.x > 50) console.log("x eqaul to ", val.x)
    else if (val.x == 13) console.log("x eqaul to ", val.x)
    else console.log("y eqaul to ", val.y)
})

if (test1[0].y > 0) console.log(test1[0].y)


/////////////////////////////////////////////////
////////////////////switch//////////////////////
////////////////////////////////////////////////

var myswitch = "two";
switch (myswitch) {
    case "one":
        console.log("mySwitch eqaul to 1")
        break
    case "two":
        console.log("mySwitch eqaul to 2")
        break
    case "three":
        console.log("mySwitch eqaul to 3")
        break
}

/////////////////////////////////////////////////
////////////////////loop/////////////////////////
////////////////////////////////////////////////

//let x = 1
for (let x = 1; x <= 20; x++) {
    console.log("x = ", x);
}
let aa = 0
while (aa <= 20) {
    console.log("a eaual to ", aa);
    aa++;
}

/////////////////////////////////////////////////
////////////////////dom/////////////////////////
////////////////////////////////////////////////
var mydiv = document.getElementById("mydiv")
mydiv.style.width = "200px"
mydiv.style.height = "200px"
mydiv.style.background = "red"
mydiv.innerHTML = "<h1>hello world</h1>"

var elements = document.getElementsByClassName("myclassname")
//elements[0].innerHTML = "my class name"
for (let e = 0; e < elements.length; e++) {
    elements[e].innerHTML = "my class name" + e;
}


var mybody =document.getElementsByTagName("body")
var myh1 = document.createElement("h1")
var textnode =document.createTextNode("This is a body")
myh1.appendChild(textnode)
mybody[0].appendChild(myh1)