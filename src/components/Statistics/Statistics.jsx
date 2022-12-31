import '../Statistics/Statistics.css';
export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(stat => (
          <li key={stat.id} className="list-item">
            <span className="label">{stat.label}</span> <br />
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// this timeout needed because function (switchColor)
// didn't see list-item right away
// he need at least 1 ms to see it
setTimeout(() => {
  switchColor();
}, 1);
// ? - - - - -
const interval = 2000;

setInterval(() => {
  switchColor();
}, interval);

function switchColor() {
  const listItem = document.querySelectorAll('.list-item');

  listItem.forEach(e => {
    e.style.background = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  });
}
