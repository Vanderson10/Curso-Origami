//Dá pra colcar valores diretos com {}
;<h1> Preferência {produto}</h1>

//Hooks
//useState
const [dados, setDados] = React.useState(null)

//recebe o primeiro valor e depois a função que atualiza ele.
const [ativo, setAtivo] = React.useState(false)

function handleClick() {
  setCarregando(true)
}

function handleClick() {
  setModal((atico) => !ativo)
}

//lembrar de quando usar map, utilizar as keys
//função de callback podemos utilizar
SetContar((contar) => contar + 1)

//useEffect
//Quando renderizar e atuzalizar
//tem dependências num array (valor que vai mudar ex. [produto]);)
React.useEffect(() => {
  const produtoLocal = window.localStorage.getItem('produto')
  if (produtoLocal !== null) setProduto(produtoLocal)
}, [])

//UseRef retorna propriedades com tipo current
//serve pra quando precisamos mostrar algo com determinada quant. de tempo
//ou quando queremos mexer com algo mutável

//UseMemo
//para memorizar um elemento pra não ficar renderizando

//UseCallback

//UseContext
//passar propriedades, colocar algo igual para vários componentes...

//Custom hooks
//você pode criar seu próprio hull, sempre deve começar com use

//regras: não pode usar hooks dnetro de condição, função, for, somente dentro de componentes. ex.
const App = () => {
  useNumeroAleatorio()
  return <div></div>
}
//ou dentro de custom hooks
