import PropTypes from 'prop-types';

import { StatsTitle, StatsList, StatItem, StatSpan } from './Statistics.styled';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title && <StatsTitle>{title}</StatsTitle>}

      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id} bgcolor={getRandomColor()}>
              <StatSpan margin="0 0 8px 0">{label}</StatSpan>
              <StatSpan>{percentage}%</StatSpan>
            </StatItem>
          );
        })}
      </StatsList>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
