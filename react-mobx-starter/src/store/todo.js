import { observable, computed, action } from "mobx";

class Todo {

  @observable
  list = [];

  @computed
  get undoList() {
    return this.list.filter(item => !item.__done);
  }

  @action
  addItem(item) {
    if (!item) return;
    item.__done = false;
    this.list.push(item);
  }

  @action
  doItem(index) {
    const item = this.list[index];
    if (!item) return;
    item.__done = true;
  }

  @action
  clearDone() {
    this.list = this.list.filter(item => !item.__done)
  }

}

export default new Todo();