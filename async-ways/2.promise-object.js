const firstPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("John Doe");
  }, 2000);
});
console.log("...............");
firstPromise.then(function(name) {
  console.log(`Welcome, ${name}`);
});
