import { Component } from "react"
import styles from "./Feedback.module.css"
import { toUpperCase } from "components/helpers/getUpperCase";

export class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props
        const uniqStyles = options.map((option) => `${option}_button`)
        return (
            <div className={styles.button_wrapper}>
                {options.map((option, index) => (
                    <button key={option} className={`${styles.action_button} ${styles[uniqStyles[index]]}`} onClick={() => onLeaveFeedback(option)}>{toUpperCase(option)}</button>
                ))}
            </div>
        )
    }
}
