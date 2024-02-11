import { Component } from "react"
import styles from "./Feedback.module.css"
import { toUpperCase } from "components/helpers/getUpperCase";

export class FeedbackOptions extends Component { 
    static defaultProps = {
        options: '',
        onLeaveFeedback: () => {},
    };

    state = {
        uniqStylesButton: `${this.props.options}_button`,
    }

    render() {
        const { options, onLeaveFeedback } = this.props
        const uniqStylesButton = this.state.uniqStylesButton
        console.log(uniqStylesButton);
        return (
            <button className={`${styles.action_button} ${styles[uniqStylesButton]}`} onClick={() => onLeaveFeedback(options)}>{toUpperCase(options)}</button>
        )
    }
}
