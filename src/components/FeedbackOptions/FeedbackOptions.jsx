import styles from './FeedbackOptions.module.css';
import { toUpperCase } from 'helpers/getUpperCase';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const uniqStyles = options.map(option => `${option}_button`);
  return (
    <div className={styles.button_wrapper}>
      {options.map((option, index) => (
        <button
          key={option}
          className={`${styles.action_button} ${styles[uniqStyles[index]]}`}
          onClick={() => onLeaveFeedback(option)}
        >
          {toUpperCase(option)}
        </button>
      ))}
    </div>
  );
};
