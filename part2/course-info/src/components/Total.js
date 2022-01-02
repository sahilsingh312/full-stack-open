import React from "react";

const Total = function ({ course }) {
  const sum = course.parts.reduce(
    (currentSum, currentPart) => currentSum + currentPart.exercises,
    0
  );

  return <p>Total of {sum} exercises </p>;
};

export default Total;
