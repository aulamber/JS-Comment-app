import React, { Component } from 'react';

import CommentList from './components/commentList/CommentList';
import CommentForm from './components/commentForm/CommentForm';
import './App.css';

import styles from './style.js';

class App extends Component {
  constructor() {
    super();

    this.state = { comments: [] };

    this.addComments = this.addComments.bind(this);
  }

  componentDidMount() {
    /*
     * 1) Retrieve potentially existing comments from localStorage.
     * -> if comments are found, stringifiedComments will be a stringified array
     * of comments. Parse stringifiedComments into an array.
     * -> otherwise, stringifiedComments will equal null, and an empty stringified
     * array of comments will be initialized in localStorage.
     * 2) Then store comments in the component state (this.state.comments),
     * so that any time a change is found in this.state.comments, the components
     * using this.state.comments via App's props can be re-rendered (the components
     * in question being CommentList and Comment).
    */

    const stringifiedComments = localStorage.getItem('comments');
    let comments = [];

    if (!stringifiedComments) {
      localStorage.setItem('comments', '[]');
    } else {
      comments = JSON.parse(stringifiedComments);
    }

    this.setState({ comments });

  }

  addComments(comments) {
    this.setState({ comments });
  }

  render() {
    return (
      <div>
        <h1 style={styles.title}>COMMENT APPLICATION</h1>

        <div style={styles.content}>
          {(this.state.comments && this.state.comments.length
            ? <CommentList comments={this.state.comments} />
            : null
          )}

          <CommentForm
            addComments={this.addComments}
            comments={this.state.comments}
          />
        </div>
      </div>
    );
  }
}

export default App;
