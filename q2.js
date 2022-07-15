// Iss text ko people1-exercise.txt ke naam ki file mein save karo.
// rishabh - meerut
// imtiyaz - delhi
// nilima - cochin
// rati - shimla
// ayishah - delhi
// raghu - shimla
// naseer - kanpur
// karthikeyan - delhi
// salma - jaipur
// pankaj - delhi
// brijesh - delhi
// govind - delhi
// puneet - shimla
// siddhi - delhi
// suman - jaipur
// rajeev - shimla
// mohinder - delhi
// rajendra - jaipur
// priyanka - shimla
// neela - delhi
// sashi - jaipur
// sarika - delhi
// deepti - shimla
// harshad - delhi
// trishna - raipur
// pradeep - jaipur
// sekhar - delhi
// nand - delhi
// anoop - delhi
// balwinder - tokyo
// Ab apne code se iss file ko kholo aur fir, uske saare contents ko print karo.

var fs=require("fs");
fs.openSync("people1-exercise.txt","w");
fs.writeFileSync("people1-exercise.txt","rishabh - meerut\nimtiyaz - delhi\nnilima - cochin\nrati - shimla\nayishah - delhi\nraghu - shimla\nnaseer - kanpur\nkarthikeyan - delhi\nsalma - jaipur\npankaj - delhi\nbrijesh - delhi\ngovind - delhi\npuneet - shimla\nsiddhi - delhi\nsuman - jaipur\nrajeev - shimla\nmohinder - delhi\nrajendra - jaipur\npriyanka - shimla\nneela - delhi\nsashi - jaipur\nsarika - delhi\ndeepti - shimla\nharshad - delhi\ntrishna - raipur\npradeep - jaipur\nsekhar - delhi\nnand - delhi\nanoop - delhi\nbalwinder - tokyo")
a=fs.readFileSync("people1-exercise.txt")
console.log(a.toString())
