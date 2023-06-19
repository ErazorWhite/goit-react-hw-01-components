import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, ...friends }) => {
        return <FriendListItem key={id} {...friends}></FriendListItem>;
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
