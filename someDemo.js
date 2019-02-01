class IdGenerator {
    static next() {
        this.id += 1;
        return this.id;
    }
}
IdGenerator.id = 0

class Employee {
    constructor(name, yearsOfExperience, jobTitle, gender = 'Male') {
        this.id = IdGenerator.next();
        this.name = name;
        this.yearsOfExperience = yearsOfExperience;
        this.jobTitle = jobTitle;
        this.gender = gender;
    }
}

// Example# 1:
function isPresent(numbers, searchTerm) {
    for (let index = 0; index < numbers.length; index++) {
        if (searchTerm === numbers[index]) {
            return true;
        }
    }
    return false;
}

const numbers = [100, 200, 300, 400, 500];
console.log(isPresent(numbers, 400));
console.log(isPresent(numbers, 440));



// Declarative

console.log(_.some(numbers, (user) => user === 400));
console.log(_.some(numbers, (user) => user === 440));

const _ = require('lodash');

function containsAllMen(teamMembers) {
    return _.every(teamMembers, (member) => member.gender == "Male");
}

const kohli = new Employee("Virat Kohli", 10, 'Manager');
const rohit = new Employee("Rohit Sharma", 8, 'Lead engineer');
const shankar = new Employee("Shankar", 0, 'Trainee');

var teamMembers = [kohli, rohit, shankar];
console.log("ContainsAllMen: "+ containsAllMen(teamMembers));


let hasAllMen = _.every(teamMembers, (member) => member.gender == "Male");
console.log("Contains all men: " + containsAllMen);

teamMembers.push(new Employee('Mithali Raj', 9, 'QA', 'Woman'));

hasAllMen = _.every(teamMembers, (member) => member.gender == "Male");


const containsTrainee = _.some(teamMembers, (member) => member.jobTitle == "Trainee");
console.log("At least a trainee: " + containsTrainee);


console.log("Contains all men: " + containsAllMen);

let options = [];

for (let index = 0; index < teamMembers.length; index++) {
    const member = teamMembers[index];
    options.push({ value: member.name, key: member.id });
}

// Declarative way
options = _.map(teamMembers, function(member) {
    return { key: member.id, value: member.name};
});

console.log(options);

for (let index = 0; index < teamMembers.length; index++) {
    const member = teamMembers[index];
    console.log(member);
}
 
for (const member of teamMembers) {
    console.log(member);
}
 
