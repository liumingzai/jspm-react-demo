'use strict';

import 'semantic-ui/semantic.min.css!';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router';
// import { CommentBox } from './comment/CommentBox';

class App extends React.Component {
  // 组件已经显示|挂载
  componentDidMount() {
    console.log('App did mount');
  }

  // 组件将要收到属性
  componentWillReceiveProps() {
    console.log('App will receive props');
  }

  componentDidUpdate() {
    console.log('App did update');
  }

  render() {
    return (
      <div>
        <div className="ui secondary pointing menu">
          <Link to="/" className="item">首页</Link>
          <Link to="/tv" className="item" query={{orderBy: 'date'}}>电视</Link>
        </div>
        {this.props.children}
    </div>
    );
  }
}


class TV extends React.Component {
  constructor(props) {
    super(props);

    let { query } = this.props.location

    console.log(query);
  }

  componentDidMount() {
    console.log('TV did mount')
  }

  render() {
    return (
      <div>
          {this.props.children}
      </div>
    );
  }
}


class Show extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.params);
  }

  render() {
    return (
       <h3>节目{this.props.params.id}</h3>
    );
  }
}

class Home extends React.Component {
  componentDidMount() {
    console.log('Home did mount');
  }

  componentWillUnmount() {
    console.log('Home will unmount');
  }

  render() {
    return (
      <div className="ui info message">首页内容</div>
    );
  }
}


class ShowIndex extends React.Component {
  render() {
    return (
      <div className="ui info message">电视节目列表</div>
    );
  }
}


  
function handleEnter() {
  console.log('进入');
}

function handleLeave() {
  console.log('离开');
}

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="tv" component={TV} >
        <IndexRoute component={ShowIndex} />
        <Route path="/show/:id" component={Show} 
          onEnter={handleEnter}
          onLeave={handleLeave}
        />
        <Redirect from="show/:id" to="/show/:id" />  
      </Route>
    </Route>
  </Router>
), document.getElementById('app'));


// ReactDOM.render((
//   <CommentBox url="app/comments.json">
// ), document.getElementById('app'));