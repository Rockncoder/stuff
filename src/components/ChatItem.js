import React from 'react';
import styles from './ChatItem.css';

export default function (props) {
  console.info('mine = ', props.mine);
  return (
    <div>
      <div className={[styles.chatItem, (props.mine? styles.hasTextRight: "")].join(' ')}>
        {props.chat}
      </div>
    </div>
  );
}