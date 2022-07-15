// Aapne jo pichle question mein (Question 1) file download kari hai, usko read karke usme number of lines 
// count kar ke print karein. Aapne sirf uss file ki number of lines Count karne ka code likhna hai.
// Hint: Har \n ke baad nayi line shuru hoti hai. Aap yeh use kar ke nayi line ka ko pehchan sakte ho.

var fs=require("fs");
fs.openSync("people1-exercise.txt","w");
fs.writeFileSync("people1-exercise.txt","rishabh - meerut\nimtiyaz - delhi\nnilima - cochin\nrati - shimla\nayishah - delhi\nraghu - shimla\nnaseer - kanpur\nkarthikeyan - delhi\nsalma - jaipur\npankaj - delhi\nbrijesh - delhi\ngovind - delhi\npuneet - shimla\nsiddhi - delhi\nsuman - jaipur\nrajeev - shimla\nmohinder - delhi\nrajendra - jaipur\npriyanka - shimla\nneela - delhi\nsashi - jaipur\nsarika - delhi\ndeepti - shimla\nharshad - delhi\ntrishna - raipur\npradeep - jaipur\nsekhar - delhi\nnand - delhi\nanoop - delhi\nbalwinder - tokyo")
var a=fs.readFileSync("people1-exercise.txt")
var A=a.toString()
console.log(A);

var count=0;
for(i in A){
    if(A[i]==="-"){
        count+=1
    }
}
console.log(count);