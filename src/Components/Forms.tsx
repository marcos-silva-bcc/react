import React, { FormEvent, useRef } from 'react'

const Forms = () => {

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null)
      person.name = nameRef.current.value
    if (ageRef.current !== null)
      person.age = parseInt(ageRef.current.value)
    console.log(person)
  };

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = {name: '', age: 0}

  return (

    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="Formulário" className="form-label">Nome</label>
            <input ref={nameRef} id="Name" type="text" className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="Age" className="form-label">Age</label>
          <input ref={ageRef} type="number" className="form-control" />
        </div>
        
        <button className="btn btn-primary" type='submit'>Submit</button>

    </form>
  )
}

export default Forms