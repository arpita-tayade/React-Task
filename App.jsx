import React from 'react'
import Peoples from './Components/Peoples'
import { people } from './data'
function App() {
  // return <Peoples data={people} />
  return (
    <>
      {people.map((e) => {
        console.log(e)
        return <Peoples id={e.id} name={e.name} age={e.age} email={e.email} />
      })}
    </>
  )
}

export default App
