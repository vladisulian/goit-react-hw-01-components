import { Profile } from './Profile/Profile';
import PropTypes from 'prop-types';
import user from './user.json';
import data from './data.json';
import { Statistics, StatisticsListItem } from './Statistics/Statistics';

export const App = () => {
  return (
    // (
    //   <Profile
    //     username={user.username}
    //     tag={user.tag}
    //     location={user.location}
    //     avatar={user.avatar}
    //     followers={user.stats.followers}
    //     views={user.stats.views}
    //     likes={user.stats.likes}
    //   />
    // ),
    <Statistics>
      <StatisticsListItem />
    </Statistics>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
};