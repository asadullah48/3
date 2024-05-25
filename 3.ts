#! /usr/bin/env node
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error(`Please enter at least 2 number's`);
  process.exit(1); // an error occoured
}
const total = args.reduce(
  (previous, current) => parseFloat(current) * parseFloat(previous)
);
if (isNaN(total)){
    console.error(`one or more arguments are not numbers`);
    process.exit(1);// an error occoured
}
console.log(total);
process.exit(0); // no error occoured