import React from 'react'
//pode ser necessário colocar outras propriedades como value, required(caso necessite preencher)
//então desestrutura...
const Input = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  )
}

export default Input
