import React from 'react';
import styles from './Options.module.css';

function Options({ onLeaveFeedback, onReset, total }) {
  return (
    <div className={styles.options}>
      <button className={styles.button} onClick={() => onLeaveFeedback('good')}>
        Good
      </button>
      <button className={styles.button} onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </button>
      <button className={styles.button} onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
      {total > 0 && (
        <button className={styles.button} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
