const args = process.argv.slice(2); // Gets the command-line arguments (ignoring node and script path)

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
