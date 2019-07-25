function greetUser(name) {
  console.log("============================================");
  const message = `Welcome ${name} to Pune Software Craftsmanship!`
  console.log(message);
  console.log("============================================");
}
const processInput = function processInput(callback) {
  const name = "John Doe";
  return callback(name);
};
processInput(greetUser);
