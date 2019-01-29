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
function isPresent(userIds, userId) {
    for (let index = 0; index < userIds.length; index++) {
        if (userId === userIds[index]) {
            return true;
        }
    }
    return false;
}

const users = [100, 200, 300, 400, 500];
console.log(isPresent(users, 400));
console.log(isPresent(users, 440));

// Declarative
const _ = require('lodash');
console.log(_.some(users, (user) => user === 400));
console.log(_.some(users, (user) => user === 440));

const kohli = new Employee("Virat Kohli", 10, 'Manager');
const rohit = new Employee("Rohit Sharma", 8, 'Lead engineer');
const shankar = new Employee("Shankar", 0, 'Trainee');

// Example# 2
var teamMembers = [kohli, rohit, shankar];
const containsTrainee = _.some(teamMembers, (member) => member.jobTitle == "Trainee");
console.log("At least a trainee: " + containsTrainee);

let containsAllMen = _.every(teamMembers, (member) => member.gender == "Male");
console.log("Contains all men: " + containsAllMen);

teamMembers.push(new Employee('Harmanpreet Kaur', 9, 'QA', 'Woman'));

containsAllMen = _.every(teamMembers, (member) => member.gender == "Male");
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
 
