import PropTypes from 'prop-types';
import ProfileStatItem from 'components/ProfileStatItem/ProfileStatItem';
import {
  ProfileCard,
  ProfileDescription,
  ProfilePicture,
  ProfileName,
  ProfileParagraph,
  ProfileStatsList,
} from './Profile.styled';

const Profile = ({
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  username,
  tag,
  location,
  stats,
}) => {
  const statEntries = Object.entries(stats);
  return (
    <ProfileCard>
      <ProfileDescription>
        <ProfilePicture src={avatar} alt="User avatar" className="avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileParagraph>@{tag}</ProfileParagraph>
        <ProfileParagraph>{location}</ProfileParagraph>
      </ProfileDescription>

      <ProfileStatsList>
        {statEntries.map(([key, value]) => {
          return (
            <ProfileStatItem key={key} statName={key} stat={value} />
          );
        })}
      </ProfileStatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
