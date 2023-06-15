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
  username = 'Unknown',
  tag = 'Unknown',
  location = 'Unknown',
  stats,
}) => {
  const statNames = Object.keys(stats);
  const statValues = Object.values(stats);
  return (
    <ProfileCard>
      <ProfileDescription>
        <ProfilePicture src={avatar} alt="User avatar" className="avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileParagraph>@{tag}</ProfileParagraph>
        <ProfileParagraph>{location}</ProfileParagraph>
      </ProfileDescription>

      <ProfileStatsList>
        {statValues.map((stat, id) => {
          return (
            <ProfileStatItem key={stat} statName={statNames[id]} stat={stat} />
          );
        })}
      </ProfileStatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
