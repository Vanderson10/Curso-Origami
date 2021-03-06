//o checkbox só com um elemento está na imagem

import React from 'react'

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza']

const App = () => {
  const [cores, setCores] = React.useState(['azul', 'vermelho'])

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value])
    } else {
      setCores(cores.filter((cor) => cor !== target.value))
    }
  }

  return (
    <form>
      {coresArray.map((cor, index) => (
        //esse key pode ser a cor, mas tá o index pq possa ser que precise ter elemento igual no array
        //o  textTransform: 'capitalize', deixa a primeira letra das opções do array maiusculas.
        <label key={index} style={{ textTransform: 'capitalize' }}>
          <input
            type="checkbox"
            value={cor}
            checked={cores.includes(cor)}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
    </form>
  )
}

export default App
