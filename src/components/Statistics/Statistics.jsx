import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      {title && <h2 class="title"> Upload stats</h2>}
      <ul class="stat-list">
        {stats.map(elm => (
          <li>
            <span class="label">{elm.label}</span>
            <span class="quantity">{elm.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
