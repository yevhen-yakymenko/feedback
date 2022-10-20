import React, { useReducer } from 'react';

import Feedback from 'components/Feedback';
import Statistics from 'components/Statistics';
import Section from 'components/Section';
import Notification from 'components/Notification';
import Box from 'components/Box';

import feedbackOptions from 'data/feedbackOptions.json';

function feedbackOptionsReducer(state, action) {
  return { ...state, ...action };
}

export default function App() {
  const [state, dispatch] = useReducer(feedbackOptionsReducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = e => {
    const { name } = e.target;
    const value = state[name];

    return dispatch({ [name]: value + 1 });
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = totalFeedback =>
    totalFeedback === 0 ? 0 : Math.round((state.good / totalFeedback) * 100);

  return (
    <Box m="15px 15px" as="main">
      <Section title="Please leave feedback">
        <Feedback options={feedbackOptions} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            options={state}
            totalFeedback={countTotalFeedback}
            positiveFeedback={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Box>
  );
}
