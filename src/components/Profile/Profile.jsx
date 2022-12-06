import PropTypes from 'prop-types';
import { Description } from './Description/Description';
import { Stats } from './Stats/Stats';
import { Card } from './Profile.styled';
import { Section } from 'components/Utils/Section';
export const Profile = ({ user }) => {
  return (
    <Section>
      <Card>
        <Description user={user} />
        <Stats user={user} />
      </Card>
    </Section>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }),
};
