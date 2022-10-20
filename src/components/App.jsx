import React, { Component } from 'react';

import Feedback from 'components/Feedback';
import Statistics from 'components/Statistics';
import Section from 'components/Section';
import Notification from 'components/Notification';
import Box from 'components/Box';

import feedbackOptions from 'data/feedbackOptions.json';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const { name } = e.target;
    const value = this.state[name];

    this.setState(prevState => (prevState[name] = value + 1));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = totalFeedback =>
    totalFeedback === 0
      ? 0
      : Math.round((this.state.good / totalFeedback) * 100);

  render() {
    return (
      <Box m="15px 15px" as="main">
        <Section title="Please leave feedback">
          <Feedback
            options={feedbackOptions}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              options={this.state}
              totalFeedback={this.countTotalFeedback}
              positiveFeedback={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Box>
    );
  }
}
