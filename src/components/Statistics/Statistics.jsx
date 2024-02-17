import styles from './Statistics.module.css';

const renderScaleArrow = (good, total) => {
  const SCALE_WIDTH = 365;
  const arrowPosition = (good / total) * SCALE_WIDTH;
  const arrowStyle = {
    left: arrowPosition + 'px',
  };
  return <div className={styles.arrow} style={arrowStyle}></div>;
};

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={styles.statistics_wrapper}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
      <div className={styles.scale}>{renderScaleArrow(good, total)}</div>
    </div>
  );
};
