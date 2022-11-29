import { Profile } from './Profile/Profile';
import user from '../json/user.json';
export const App = () => {
  return (
    <>
      <Profile user={user}></Profile>
    </>
  );
};
