import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('todo')
@observer
export default class Home extends React.Component {
  itemId = 1;

  addTodoItem = () => {
    this.props.todo.addItem({
      id: this.itemId++,
    });
  };

  doFirstItem = () => {
    const item = this.props.todo.undoList[0];
    if (!item) return;
    item.__done = true;
  };

  clearDoneItem = () => {
    this.props.todo.clearDone();
  };

  render() {
    return (
      <section>
        <div>
          todoList: 
          {
            this.props.todo.list.map(item => <span key={item.id} style={{margin: '0 5px'}}>{item.id}</span>)
          }
        </div>
        <div>
          undoList: 
          {
            this.props.todo.undoList.map(item => <span key={item.id} style={{margin: '0 5px'}}>{item.id}</span>)
          }
        </div>
        <div>
          <button onClick={this.addTodoItem}>addTodoItem</button>
          <button onClick={this.doFirstItem}>doFirstItem</button>
          <button onClick={this.clearDoneItem}>clearDoneItem</button>
        </div>
      </section>
    );
  }

}