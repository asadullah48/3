var args = process.args.slice(2);
if (args.length < 2) {
    console.error("Please enter at least 2 number's");
    process.exit(1); // an error occoured
}
