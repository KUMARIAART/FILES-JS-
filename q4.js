// Aapke paas ek list hai. Iss list mein har string ko ek file-question3.txt naam ki file mein nayi line 
// mein daalo. Aapki list yeh rahi:

var fs=require("fs");
var banks_list = ["Kotak", "HDFC", "RBL", "SBI", "Bank of Baroda"];
for(i of banks_list){
    fs.appendFileSync("file-question3.txt",i+"\n");
}
var a=fs.readFileSync("file-question3.txt")
var A=a.toString()
console.log(A);

