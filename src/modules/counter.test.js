const countItems = require('./countItems.js');
const countComments = require('./counterComments.js');

describe('Counters for items', () => {
  test('should check items counter', () => {
    expect(countItems()).toBe(9);
  });
  test('counter shouldnt be null', () => {
    expect(countItems()).not.toBeNull();
  });
});

let comments;
document.body.innerHTML = `
    <li></li>
    <li></li>
    <li></li>
    <li></li>
`;

describe('Counters for comments', () => {
  comments = document.querySelectorAll('li');
  test('should check items counter', () => {
    expect(countComments(comments)).toBe(4);
  });
});
