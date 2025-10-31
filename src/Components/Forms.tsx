import React, { FormEvent, useRef, useState } from 'react'

const Forms = () => {
  const [person, setPerson] = useState({
    name: '',
    age: ''
  })


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  }

  return (

    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="Formulário" className="form-label">Nome</label>
            <input onChange={(event) => setPerson({...person, name: event.target.value})} id="Name" value={person.name} type="text" className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="Age" className="form-label">Age</label>
          <input onChange={(event) => setPerson({...person, age: event.target.value})} type="number" value={person.age} className="form-control" />
        </div>
        
        <button className="btn btn-primary" type='submit'>Submit</button>

    </form>
  )
}

export default Forms