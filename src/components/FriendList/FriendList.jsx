import { List } from './FriendList.styled';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, ...friends }) => {
        return <FriendListItem key={id} friends={friends}></FriendListItem>;
      })}
    </List>
  );
};

export default FriendList;
