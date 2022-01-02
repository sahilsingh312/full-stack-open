import React from "react";
import Part from "./Part";

const Content = ({ course }) => {
  console.log(course)
  console.log('hi');

  return (
    <div>
      {course.parts.map((course) => (
        <Part part={course} key = {course.id}/>
      ))}
    </div>
  );
};

export default Content;
