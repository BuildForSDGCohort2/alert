const readline = require("readline");
const takein = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

takein.question("What is your project title ? ", function(projectTitle) {
    takein.question("What are the prerequisites ? ", function(prerequisites) {
        console.log(`${projectTitle}, is a citizen of ${prerequisites}`);
        takein.close();
    });
});

takein.on("close", function() {
    console.log("\nTHank you !!!");
    process.exit(0);
});