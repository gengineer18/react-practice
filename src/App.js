import React from 'react';

const App = () => {
  const profiles = [
    { name: "taro", age: 10 },
    { name: "hanako", age: 5 },
    { name: "baby" }
  ]
  return (
    <>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name} {props.age} years old.</div>
}

User.defaultProps = {
  age: 0
}

export default App;
