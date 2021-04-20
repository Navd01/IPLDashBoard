import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";
import "./MatchPage.scss";
import { YearSelector } from "./YearSelector";
import { Link } from "react-router-dom";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  useEffect(() => {
    const fetchMatchDetails = async () => {
      const response = await fetch(
        `http://localhost:8080/teams/${teamName}/matches?year=${year}`
      );
      const data = await response.json();
      setMatches(data);
    };

    fetchMatchDetails();
  }, [year]);
  return (
    <div className="MatchPage">
      <div>
        <h1 className="teamName-heading">
          <Link to={`/teams/${teamName}`}> {teamName}</Link>
        </h1>
        <h1>Match Page</h1>
        <div className="year-selector">
          <YearSelector teamName={teamName} />
        </div>
      </div>
      <div>
        {matches.map((match) => (
          <MatchDetailCard teamName={teamName} match={match} />
        ))}
      </div>
    </div>
  );
};
