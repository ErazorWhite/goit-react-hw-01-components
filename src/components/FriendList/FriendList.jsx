import PropTypes from 'prop-types';
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

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
        id: PropTypes.number.isRequired
  })),
};

export default FriendList;
