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

const _ = require('lodash');
console.log(_.some(users, (user)=> user === 400));
console.log(_.some(users, (user)=> user === 440));
