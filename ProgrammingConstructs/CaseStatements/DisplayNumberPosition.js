let r1 = require('readline');
let prompts = r1.createInterface(process.stdin, process.stdout);
prompts.question("enter value in unit format 1,10,100,1000 etc  : ", function (value) {
switch(true){
case (value==1 && value<=9):
    console.log("unit")
    break
case (value>=10 && value<=99):
    console.log("Ten")
    break
case (value>=100&& value<=999):
    console.log("Hundread")
    break
case (value>=1000 && value<=9999):
    console.log("Thousand")
    break
default:
    console.log("Wrong Input")
    process.exit();
}
}); 