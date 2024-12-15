import React, { useState } from 'react';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import styles from './App.module.css';
import Description from './components/Description/Description';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = feedback.good + feedback.bad > 0
    ? Math.round((feedback.good / (feedback.good + feedback.bad)) * 100)
    : 0;

  return (
  <div className={styles.container}>
    <Description /> 
    <Options
      onLeaveFeedback={handleFeedback}
      onReset={resetFeedback}
      total={totalFeedback}
    />
    {totalFeedback > 0 ? (
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={totalFeedback}
        positive={positiveFeedback}
      />
    ) : (
      <Notification message="No feedback yet" />
    )}
  </div>
);
}

export default App;
