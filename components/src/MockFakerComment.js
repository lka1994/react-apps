import faker from "faker";

class MockFakeComment {
  constructor() {
    this.avatar = faker.image.avatar();
    this.name = faker.name.firstName();
    this.author = faker.name.lastName();
    this.datetime = faker.date.past().toDateString();
    this.comment = faker.lorem.sentence();
  }
  get() {
    return JSON.parse(JSON.stringify(this));
  }
}

export default MockFakeComment;
