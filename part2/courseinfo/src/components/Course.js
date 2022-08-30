const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => <Part key={part.id} part={part} />)} 
    </>
  )
}

const Total = ({ parts }) => {
  return (
    <p>
      <strong>total of {parts.reduce(((sum, part) => sum + part.exercises), 0)}</strong>
    </p>
  )
}

const Course = ({ courses }) => {
  return (
    <>
      {courses.map(course => {
        return (
          <div key={course.id}>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
          </div>
        )
      })}
    </>
  )
}

export default Course