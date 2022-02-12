import PropTypes from 'prop-types';
import {
  ProfileBox,
  Description,
  Avatar,
  Stats,
  Name,
  Tag,
  Location,
  Label,
  Quantity,
  Item,
} from './Profile.styled';

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileBox>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Item>
          <Label>Followers </Label>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views </Label>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes </Label>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </Stats>
    </ProfileBox>
  );
}
