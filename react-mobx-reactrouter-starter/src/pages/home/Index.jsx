import React from 'react';
import { observer, inject } from 'mobx-react';
import MyTitle from 'components/my-title';

@inject('todo')
@observer
export default class Home extends React.Component {
  addTodoItem = () => {
    const id = this.props.todo.list[this.props.todo.list.length - 1]
      ? this.props.todo.list[this.props.todo.list.length - 1].id + 1
      : 1;
    this.props.todo.addItem({
      id,
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
      <section className="home-page">
        <MyTitle>mobx-test</MyTitle>
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