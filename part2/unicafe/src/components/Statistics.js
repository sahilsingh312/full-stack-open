import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad, sum }) => {
  return (
    <table>
      <StatisticLine text={"good"} value={good} />
      <StatisticLine text={"neutral"} value={neutral} />
      <StatisticLine text={"bad"} value={bad} />
      <StatisticLine text={"all"} value={sum} />
      <StatisticLine text={"average"} value={(good - bad) / sum} />
      <StatisticLine text={"positive"} value={good / sum} />%
    </table>
  );
};

export default Statistics;
