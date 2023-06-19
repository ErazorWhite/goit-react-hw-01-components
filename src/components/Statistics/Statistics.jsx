import PropTypes from 'prop-types';

import { StatsTitle, StatsList, StatItem, StatSpan } from './Statistics.styled';


const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title && <StatsTitle>{title}</StatsTitle>}

      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id}>
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
  ).isRequired,
};

export default Statistics;
