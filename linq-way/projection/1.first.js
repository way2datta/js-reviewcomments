function transformWords() {
  const words = ["an", "apple", "a", "day"];
  var transformedWords = words.map(word => word.charAt(0));
  for (const newWord of transformedWords) {
    console.log(newWord);
  }
}

function numbersPlusOneDemo() {
  const numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
  var numbersPlusOne = numbers.map(n => n + 1);
  for (const number of numbersPlusOne) {
    console.log(number);
  }
}

function transformObjectArrayIntoStringArray() {
  const players = [
    { name: "Rohit Sharma", role: "Batsman", team: "India" },
    {
      name: "Jacques Kallis",
      role: "Batting Allrounder",
      team: "South Africa"
    },
    { name: "Chris Gayle", role: "Batsman", team: "West Indies" },
    { name: "Rashid Khan", role: "Bowler", team: "Afghanistan" }
  ];
  const playerNames = players.map(x => x.name);
  console.log(playerNames);
}

const numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
const displayTextForNumbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];

const transformedNumbers = numbers.map(function(number){
    return {number, displayText: displayTextForNumbers[number]};
})

  console.log(transformedNumbers);
