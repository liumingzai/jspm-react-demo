'use strict';

import React from 'react';
import Comment from './Comment';

class CommontList extends React.Component {
  render() {
    let commontNodes = this.props.data.map(comment => {
      return (
        <Comment author={comment.author} date={comment.date} >
          {comment.text}
        </Comment>
      );
    });

    return (
      <div>
        {commontNodes}
      </div>
    )
  }
}

export { CommontList as default};