import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
export const App = () => {
  return (
    <>
      <Profile user={user}></Profile>

      <Statistics title stats={data}></Statistics>
      <Statistics stats={data}></Statistics>
      <FriendList friends={friends}></FriendList>
    </>
  );
};
