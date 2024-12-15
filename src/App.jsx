import React, { useState } from 'react';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import styles from './App.module.css';

function App() {
  // Стан для лічильників
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Функція для оновлення лічильника
  const handleFeedback = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  // Функція для скидання лічильників
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  // Загальна кількість натискань
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  // Відсоток позитивних відгуків (враховуються лише good та bad)
  const positiveFeedback = feedback.good + feedback.bad > 0
    ? Math.round((feedback.good / (feedback.good + feedback.bad)) * 100)
    : 0;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sip Happens Café</h1>
      <p className={styles.description}>
        Please leave your feedback about our service by selecting one of the options below.
      </p>

      {/* Компонент кнопок */}
      <Options onLeaveFeedback={handleFeedback} onReset={resetFeedback} />

      {/* Блок Feedback або повідомлення про відсутність даних */}
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
