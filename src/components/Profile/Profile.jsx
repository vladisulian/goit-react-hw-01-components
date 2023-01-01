import '../Profile/Profile.css';
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="profile__avatar" />
        <p className="profile__name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers:</span>
          <span className="quantity"> {followers}</span>
        </li>
        <li>
          <span className="label">Views:</span>
          <span className="quantity"> {views}</span>
        </li>
        <li>
          <span className="label">Likes:</span>
          <span className="quantity"> {likes}</span>
        </li>
      </ul>
    </div>
  );
};
