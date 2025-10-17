import React from 'react'

const Forms = () => {
  return (
    <form>
        <div className="mb-3">
            <label htmlFor="Formulário" className="form-label">Nome</label><input id="Name" type="text" className="form-control"/>
        </div>
        <div className="mb-3"><label htmlFor="Age" className="form-label">Idade</label><input type="number" id = "Age" className="form-control" /></div>

    </form>
  )
}

export default Forms