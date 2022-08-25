const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>{props.name} {props.exercises}</div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.content1} exercises={props.num1} />
      <Part name={props.content2} exercises={props.num2} />
      <Part name={props.content3} exercises={props.num3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.num1 + props.num2 + props.num3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  }
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  }
  const part3 = {
    name: "State of a component",
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content content1={part1.name} num1={part1.exercises} content2={part2.name} num2={part2.exercises} content3={part3.name} num3={part3.exercises} />
      <Total num1={part1.exercises} num2={part2.exercises} num3={part3.exercises} />
    </div>
  )
}

export default App