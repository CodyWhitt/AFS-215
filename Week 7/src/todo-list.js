class TodoList {
    constructor() {
      this.list = [];
    }
  
    callList() {
      return this.list;
    }
  
    addItem(item) {
      this.list.push(item);
    }
  
    addItems(items) {
      this.list = [...this.list, ...items];
    }
  
    removeFirstItem() {
      this.list.shift();
    }
  
    removeLastItem() {
      this.list.pop();
    }
  
    removeSpecificItem(id) {
      this.list = this.list.filter(item => item.id !== id);
    }
  }
  
  module.exports = TodoList;
  