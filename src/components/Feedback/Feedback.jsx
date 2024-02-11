import { Component } from "react"
import styles from "./Feedback.module.css"
import { Statistics } from "./Statistics"
import { FeedbackOptions } from "./FeedbackOptions"
import { Section } from "components/helpers/Section"

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handlerAddRate = (feedbackType) => {
        this.setState((prevState) => ({
            [feedbackType] : prevState[feedbackType] + 1
        }))
    }

    countTotalFeedback() {
        const { good, neutral, bad } = this.state
        return good + neutral + bad
    }

    countPositiveFeedbackPercentage() {
        return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2)
    }

    render() {
        const { good, neutral, bad } = this.state

        return (
            <div>
                <Section title='Please leave feedback' children={
                    <div className={styles.button_wrapper}>
                        {Object.keys(this.state).map((key) => (
                            <FeedbackOptions key={key} options={key} onLeaveFeedback={this.handlerAddRate} />))}
                    </div>} />
                <Section title='Feedback statistics' children={
                    <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
                } />
            </div> 
        )
    }
}