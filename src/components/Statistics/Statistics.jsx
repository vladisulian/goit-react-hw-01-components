export const StatisticsList = ({ title, stats, id }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        <li>{id}</li>
      </ul>
    </section>
  );
};

// ? - - - - -
