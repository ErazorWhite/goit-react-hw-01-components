import PropTypes from 'prop-types';
import { Item, Label, Quantity } from './ProfileStatItem.styled';

const ProfileStatItem = ({ statName, stat }) => {
  return (
    <Item>
      <Label>{statName}</Label>
      <Quantity>{stat.toLocaleString()}</Quantity>
    </Item>
  );
};

ProfileStatItem.propTypes = {
  statName: PropTypes.string.isRequired,
  stat: PropTypes.number.isRequired,
};

export default ProfileStatItem;
