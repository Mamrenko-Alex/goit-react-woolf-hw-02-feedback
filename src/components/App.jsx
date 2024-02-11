import { Component } from "react"
import styles from "./Feedback/Feedback.module.css"
import { Statistics } from "./Feedback/Statistics"
import { FeedbackOptions } from "./Feedback/FeedbackOptions"
import { Section } from "./helpers/Section"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state
    return good + neutral + bad
  }

  countPositiveFeedbackPercentage() {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2)
  }

  handlerAddRate = (feedbackType) => {
    this.setState((prevState) => ({
      [feedbackType] : prevState[feedbackType] + 1
    }))
  }

  render() {
    const { good, neutral, bad } = this.state

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Section title='Please leave feedback' children={
          <div className={styles.button_wrapper}>
              {Object.keys(this.state).map((key) => (
                  <FeedbackOptions key={key} options={key} onLeaveFeedback={this.handlerAddRate} />))}
          </div>} />
          <Section title='Feedback statistics' children={
            <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
          } />
      </div>
    );
  }
};