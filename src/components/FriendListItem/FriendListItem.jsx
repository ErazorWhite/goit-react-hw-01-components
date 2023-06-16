import { Item, Status, Avatar, Name } from './FriendListItem.styled';

const FriendListItem = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
          <Name>{name}</Name>
    </Item>
  );
};

export default FriendListItem;
