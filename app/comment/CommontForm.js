'use strict';

import React from 'react';

class CommontForm extends React.Component {
  handleSumbmit(event) {
    event.preventDefault(); // 组织event自己的事件
    console.log('提交表单...');

    let author = this.refs.author.value,
        text = this.refs.text.value;
   
    console.log(author, text);  // 如何把author和text显示在列表中

    this.props.onCommentSubmit({author, text, date: '刚刚'});
  }

  render() {
    return (
      <form className="ui reply form" onSubmit={this.handleSumbmit.bind(this)}>
      <div className="field">
        <input type="text" placeholder="姓名" ref="author"/>
      </div>
      <div className="field">
        <textarea placeholder="评论" ref="text"/>
      </div>
      <div>
        <button type="submit" className="ui blue button">
          添加评论
        </button>
      </div>
    </form>
    );
  }
}

export { CommontForm as default};