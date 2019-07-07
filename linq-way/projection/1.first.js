const words = ["an", "apple", "a", "day"];

var transformedWords = words.map(word => word.charAt(0));

for (const newWord of transformedWords) {
  console.log(newWord);
}
