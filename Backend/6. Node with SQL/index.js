const { faker } = require('@faker-js/faker');

let randomUser = function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}
console.log(randomUser());
