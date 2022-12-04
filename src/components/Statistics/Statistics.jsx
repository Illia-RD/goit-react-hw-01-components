import { Container } from 'components/Utils/Container';
import { Section } from 'components/Utils/Section';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Container>
        {title && <h2 class="title"> Upload stats</h2>}
        <ul class="stat-list">
          {stats.map(({ id, label, percentage }) => (
            <li key={id}>
              <span class="label">{label}</span>
              <span class="quantity">{percentage}%</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
