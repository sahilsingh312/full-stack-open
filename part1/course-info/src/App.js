import React from 'react'

const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass datad'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

const Header = (props) => {
  return (
      <div>
          <h1>{props.course}</h1>
      </div>
  )
}

const Exercises = (props) => {
  return (
      <div>
          <p>Number of exercises {props.exercises}</p>
      </div>
  )
}

const Part = (props) => {
  return (
      <div>
          <p>{props.part} {props.exercise}</p>
      </div>
  )
}

const Content = () =>{
  return (
    <div>
      <Part part={part1} exercise={exercises1}/>
      <Part part={part2} exercise={exercises2}/>
      <Part part={part3} exercise={exercises3}/>
    </div>
  )
}


const App = () => {
  

  return (
    <div>
      <Header course={course} />
       <Content /> 
      <Exercises exercises={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App