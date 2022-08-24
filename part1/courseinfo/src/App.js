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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content content1={part1} num1={exercises1} content2={part2} num2={exercises2} content3={part3} num3={exercises3} />
      <Total num1={exercises1} num2={exercises2} num3={exercises3} />
    </div>
  )
}

export default App