var fs=require("fs");
fs.writeFileSync("Aarti.text","i am aarti kumari from new delhi i have completed my graduction from delhi univercity")
fs.appendFileSync("Aarti.text","\n leter i have joined ng to start my cording jurney for software devloper couse.");
var A=fs.readFileSync("Aarti.text");
fs.renameSync("Aarti.text","intro.text");
fs.unlinkSync("intro.text");
fs.openSync("Sheetal.txt","w")
var a=A.toString()
console.log((a));

