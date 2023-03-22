const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part name={props.parts[0][0]} exercises={props.parts[0][1]} />
      <Part name={props.parts[1][0]} exercises={props.parts[1][1]} />
      <Part name={props.parts[2][0]} exercises={props.parts[2][1]} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.parts[0][1] + props.parts[1][1] + props.parts[2][1]}</p>
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

  const parts = [[part1, exercises1], [part2, exercises2], [part3, exercises3]]

  return (
    <>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </>
  )
}

export default App;
