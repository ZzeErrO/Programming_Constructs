let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter a startnumber and endnumber ",function(startNumber, endNumber) { 
    for (i = startNumber; i <= endNumber; i++) 
    {
	    let prime = true;
	    for (j = 2; j <= Math.sqrt(i); j++) {
		    if (i % j == 0) {
			    prime = false;
			    break;
		    }
	    }
	    if (prime && i != 1) 
        {
		    console.log(i);
        }
    }
    process.exit();
});