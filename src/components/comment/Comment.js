import React, { PropTypes } from 'react';

import styles from './style';

export default function Comment({ data }) {
  const { comment, date, email, username } = data;
  const { day, hours, minutes, month, seconds, year } = date;
  const secondsString = (seconds > 9 ? seconds : `0${seconds}`);
  const formattedDate = `${day}-${month + 1}-${year} at ${hours}:${minutes}:${secondsString}`;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.elem}>{username}</div>
        { email ? <div style={styles.elem}>({email})</div> : null }
        <div>{formattedDate}</div>
      </div>
      <div style={styles.body}>{comment}</div>
    </div>
  );
}

Comment.propTypes = {
  data: PropTypes.shape().isRequired,
};
