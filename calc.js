const args = process.argv.slice();
//console.log(process.argv);

let op = "";

if (args[2] == "-") {
    console.log("menos");
    op = "sub"
} else if (args[2] == "+") {
    console.log("mais");
    op = "sum"
}

var total = Number(args[3]);

for (let index = 4; index < args.length; index++) {
    if (op == "sum") {
        total += Number(args[index]);
    } else if (op == "sub") {
        total -= Number(args[index]);
    }
}

console.log("Resultado: " + total)
