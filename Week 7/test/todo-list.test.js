const expect = require('chai').expect;
const TodoList = require('../src/todo-list.js');

describe('Todo List', () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  describe('#callList', () => {
    it('should return the list', () => {
      todoList.addItems([{id: 1, task: 'test task', done: false}]);
      expect(todoList.callList()).to.deep.equal([{id: 1, task: 'test task', done: false}]);
    });
  });

  describe('#addItem', () => {
    it('should add a new item to the list', () => {
      todoList.addItem({id: 1, task: 'test task', done: false});
      expect(todoList.callList()).to.deep.equal([{id: 1, task: 'test task', done: false}]);
    });
  });

  describe('#addItems', () => {
    it('should add multiple items to the list', () => {
      todoList.addItems([
        {id: 1, task: 'test task 1', done: false},
        {id: 2, task: 'test task 2', done: false},
      ]);
      expect(todoList.callList()).to.deep.equal([
        {id: 1, task: 'test task 1', done: false},
        {id: 2, task: 'test task 2', done: false},
      ]);
    });
  });

  describe('#removeFirstItem', () => {
    it('should remove the first item from the list', () => {
      todoList.addItems([
        {id: 1, task: 'test task 1', done: false},
        {id: 2, task: 'test task 2', done: false},
      ]);
      todoList.removeFirstItem();
      expect(todoList.callList()).to.deep.equal([{id: 2, task: 'test task 2', done: false}]);
    });
  });

  describe('#removeLastItem', () => {
    it('should remove the last item from the list', () => {
      todoList.addItems([
        {id: 1, task: 'test task 1', done: false},
        {id: 2, task: 'test task 2', done: false},
      ]);
      todoList.removeLastItem();
      expect(todoList.callList()).to.deep.equal([{id: 1, task: 'test task 1', done: false}]);
    });
  });

  describe('#removeSpecificItem', () => {
    it('should remove a specific item from the list by id', () => {
      todoList.addItems([
        {id: 1, task: 'test task 1', done: false},
        {id: 2, task: 'test task 2', done: false},
      ]);
      todoList.removeSpecificItem(2);
      expect(todoList.callList()).to.deep.equal([{id: 1, task: 'test task 1', done: false}]);
    });
  });
});
