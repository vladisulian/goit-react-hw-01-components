import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './Friends/FriendsList';
import { FriendsListItem } from './Friends/FriendsListItem';
import PropTypes from 'prop-types';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';

console.log('user', user);
console.log('data', data);
console.log('friends', friends);

export const App = () => {
  return (
    <AppContainer>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList>
        <FriendsListItem
          friends={friends}
          id={friends.id}
          avatar={friends.avatar}
          name={friends.name}
          isOnline={friends.isOnline}
        />
      </FriendsList>
    </AppContainer>
  );
};
const AppContainer = ({ children }) => {
  return <div className="app">{children}</div>;
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
