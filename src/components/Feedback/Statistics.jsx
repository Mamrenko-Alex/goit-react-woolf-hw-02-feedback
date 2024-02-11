import { Component } from "react"
import { Notification } from "components/helpers/Notification";
import styles from "./Feedback.module.css"

export class Statistics extends Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePercentage: 0,
    };

    renderScaleArrow() {
        const SCALE_WIDTH = 365;
        const arrowPosition = (this.props.good / this.props.total) * SCALE_WIDTH;
        const arrowStyle = {
            left: arrowPosition + "px",
        };
        return (
            <div className={styles.arrow} style={arrowStyle}></div>
        )
    }

    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props

    return (
        <div>
            { total > 0 ? (
                <div className={styles.statistics_wrapper}>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                    <p>Total: {total}</p>
                    <p>Positive feedback: {positivePercentage}%</p>
                    <div className={styles.scale}>{this.renderScaleArrow()}</div>
                </div>
            ) : (
                <Notification message='There is no feedback'/>
            )}
        </div>
    );
    }
}