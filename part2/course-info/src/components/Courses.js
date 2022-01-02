import React from "react";
import Course from "./Course";

const Courses = ({ courses }) => {
  console.log(courses);

  return (
    <div>
      {courses.map((course) => (
        <Course course={course} />
      ))}
    </div>
  );
};

export default Courses;
