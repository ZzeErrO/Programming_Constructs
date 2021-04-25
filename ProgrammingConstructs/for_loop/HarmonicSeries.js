let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter (n)th number for harmonic series ",function(n) {    
    for(i = 1; i <= n; i++)
    {
        let a =1
        let d = 1
        result = a + (i - 1) * d;
        console.log("1/" + result + "+")
    }
    process.exit();
});