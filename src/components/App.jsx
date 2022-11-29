import user from '../json/user.json';
import { Profile } from "components/Profile/Profile";
export const App = () => {
  return (
    <>
      <Profile user={user}></Profile>
    </>
  );
};
