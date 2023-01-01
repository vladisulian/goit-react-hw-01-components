export const FriendsListItem = ({ friends }) => {
  return friends.map(friend => (
    <li className="item" key={friend.id}>
      <span className="status">{friend.isOnline.toString()}</span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  ));
};

const delay = 1;
setTimeout(() => {
  const span = document.querySelectorAll('.status');

  span.forEach(function (e, i) {
    if (e.textContent === 'true') {
      e.style.background = 'blue';
    } else {
      e.style.background = 'red';
    }
    // console.log('Span number:', i, 'Span text content:', e.textContent);
  });
}, delay);
