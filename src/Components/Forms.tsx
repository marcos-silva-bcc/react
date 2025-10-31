import React, { FormEvent, useRef, useState } from 'react'
import {FieldValues, useForm} from 'react-hook-form'

interface FormData {
  name: string;
  age: number;
}

const Forms = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<FormData>();
  
  const onSubmit = (data: FieldValues) => console.log(data)

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor="Formulário" className="form-label">Name</label>
            <input {...register('name', {required: true, minLength: 3})} id="Name" type="text" className="form-control"/>
            { errors.name?.type === 'required' && <p className='text-danger'>The name field is required.</p>}
            { errors.name?.type === 'minLength' && <p className='text-danger'>The name must be at least 3 characters.</p>}
        </div>
        
        <div className="mb-3">
          <label htmlFor="Age" className="form-label">Age</label>
          <input {...register('age', {required: true, min:18})} id="Age" type="number" className="form-control" />
          {errors.age?.type === "required" && <p className='text-danger'>The age field is required</p>}
          {errors.age?.type === "min" && <p className='text-danger'>You must be above 18</p>}
        </div>
        
        <button className="btn btn-primary" type='submit'>Submit</button>

    </form>
  )
}

export default Forms