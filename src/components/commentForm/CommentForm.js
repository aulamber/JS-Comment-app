import React, { Component, PropTypes } from 'react';

import checkEmailFormat from '../../utils/formValidation';
import styles from './style';

const initialState = {
  comment: '',
  correctFormatEmail: true,
  disabled: true,
  email: '',
  username: '',
};

export default class CommentForm extends Component {
  constructor() {
    super();
    this.state = initialState;

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(key) {
    return (event) => {
      const { value } = event.target;

      this.setState({ [key]: value }, () => {
        const { comment, email, username } = this.state;
        const emailValue = (key === 'email' ? value : email);
        const correctFormatEmail = checkEmailFormat(emailValue);
        const disabled = (!username || !comment || (email && !correctFormatEmail)
          ? true
          : false
        );

        this.setState({ correctFormatEmail, disabled });
      });
    }
  }

  onFormSubmit() {
    const { comment, email, username } = this.state;
    const dateObject = new Date();
    const date = {
      day: dateObject.getDate(),
      hours: dateObject.getHours(),
      minutes: dateObject.getMinutes(),
      month: dateObject.getMonth(),
      seconds: dateObject.getSeconds(),
      year: dateObject.getFullYear(),

    };
    const newComment = { comment, date, email, username };
    const newComments = [ ...this.props.comments, newComment ];
    const stringifiedComments = JSON.stringify(newComments);

    localStorage.setItem('comments', stringifiedComments);
    this.props.addComments(newComments);
    this.setState(initialState);
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.fieldWrapper}>
          <label style={styles.label}>Username</label>
          <input
            onChange={this.onInputChange('username')}
            placeholder="Katie"
            style={styles.input}
            value={this.state.username}
          />
        </div>

        <div style={styles.fieldWrapper}>
          <label style={styles.label}>Email</label>
          <input
            onChange={this.onInputChange('email')}
            placeholder="katie@free.fr"
            style={styles.input}
            value={this.state.email}
          />
          {this.state.email && !this.state.correctFormatEmail
            ? <div style={styles.error}>Wrong format, please add a valid email.</div>
            : null
          }
        </div>

        <div style={styles.fieldWrapper}>
          <label style={styles.label}>Comment</label>
          <textarea
            onChange={this.onInputChange('comment')}
            placeholder="This is my first comment!"
            style={styles.textarea}
            value={this.state.comment}
        />
        </div>

        <button
          disabled={this.state.disabled}
          onClick={this.onFormSubmit}
          style={(this.state.disabled ? styles.disabledButton : styles.validButton)}
        >SUBMIT
        </button>
      </div>
    );
  }
}

CommentForm.propTypes = {
  addComments: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
