import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transaction from '../json/transactions.json';
import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    <>
      <Profile user={user}></Profile>

      <Statistics title={'Upload stats'} stats={data}></Statistics>
      <Statistics stats={data}></Statistics>

      <FriendList friends={friends}></FriendList>

      <TransactionHistory items={transaction} />
    </>
  );
};
