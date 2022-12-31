import { Profile } from './Profile/Profile';
import PropTypes from 'prop-types';
import user from './user.json';
import data from './data.json';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    >
      <Statistics title="Upload stats" stats={data} />
    </Profile>

    // (<Statistics stats={data}></Statistics>)
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
};
