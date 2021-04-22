import { React } from "react";
import { Link } from "react-router-dom";
import "./YearSelector.scss";
export const YearSelector = ({ teamName }) => {
  let years = [];
  const start_year = process.env.REACT_APP_DATA_START_YEAR;
  const end_year = process.env.REACT_APP_DATA_END_YEAR;

  for (let i = start_year; i <= end_year; i++) {
    years.push(i);
  }

  return (
    <ul className="YearSelector">
      {years.map((year) => (
        <li key={year}>
          <Link to={`/teams/${teamName}/matches/${year}`}>{year}</Link>
        </li>
      ))}
    </ul>
  );
};
