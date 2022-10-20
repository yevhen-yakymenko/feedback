import { StatisticsList, StatisticsItem } from './Statistics.styled';

export default function Statistics({
  options,
  totalFeedback,
  positiveFeedback,
}) {
  const statName = Object.keys(options);

  return (
    <StatisticsList>
      {statName.map(name => (
        <StatisticsItem key={name}>
          {name}: {options[name]}
        </StatisticsItem>
      ))}
      <StatisticsItem>Totla: {totalFeedback()}</StatisticsItem>
      <StatisticsItem>
        Positive feedback: {positiveFeedback(totalFeedback())}%
      </StatisticsItem>
    </StatisticsList>
  );
}
