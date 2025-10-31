import React, { FormEvent, useRef, useState } from 'react'
import {FieldValues, useForm} from 'react-hook-form'
const Forms = () => {
  const {register, handleSubmit} = useForm();
  
  const onSubmit = (data: FieldValues) => console.log(data)

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor="Formulário" className="form-label">Nome</label>
            <input {...register('name')} id="Name" type="text" className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="Age" className="form-label">Age</label>
          <input {...register('age')} type="number" className="form-control" />
        </div>
        
        <button className="btn btn-primary" type='submit'>Submit</button>

    </form>
  )
}

export default Forms