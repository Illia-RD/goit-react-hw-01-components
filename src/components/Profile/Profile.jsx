import PropTypes from 'prop-types';
import { Description } from './Description/Description';
import { Stats } from './Stats/Stats';
import { Wrap } from './Profile.styled';
import { Section } from 'components/Utils/Section';
import { Container } from 'components/Utils/Container';
export const Profile = ({ user }) => {
  return (
    <Section>
      <Container>
        <Wrap>
          <Description user={user} />
          <Stats user={user} />
        </Wrap>
      </Container>
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
