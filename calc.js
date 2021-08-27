const args = process.argv.slice();
console.log(process.argv);
for (let index = 0; index < args.length; index++) {
    if (isNaN(args[index])) {
        console.log(`Arg[${result}] is ${args[index]}`);
    }
}