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
  console.log('All spans', span[0]);
  console.log(span[0].textContent);

  span.forEach(function (e, i) {
    if (e.textContent === 'true') {
      e.style.background = 'blue';
    } else {
      e.style.background = 'red';
    }
    console.log('Span number:', i, 'Span text content:', e.textContent);
  });
}, delay);
