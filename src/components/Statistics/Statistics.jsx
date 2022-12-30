// import '../Statistics/Statistics.css';

export const Statistics = ({ title, children }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">{children}</ul>
    </section>
  );
};

export const StatisticsListItem = ({ stats }) => {
  return (
    <li className="item">
      <span className="label"></span>
      <span className="percentage"></span>
    </li>
  );
};

// ? - - - - -
