//Java Script: Tudo é objeto
//Arrow functions

const uppername = (nome) => nome.toUpperCase()
console.log(upperName('andre'))

//desestruturação de um objeto
function handleMouse(event) {
	const x = event.clientX;
	const y = event.clienteY;
	console.log(x, y);
}

documento.addEventListener('click', handleMouse);

//como ficaria
function handleMouse(event) {
	const {clientX, clientY } = event;
	console.log(clientX, clientY);
}
documento.addEventListener('clisk', handleMouse);

//desestruturar arrays
const frutas = ['banana', 'uva'];
const [fruta1, fruta2] = frutas;
console.log(fruta2);

const useQuadrado = [
    4, 
    function(lado) {
       return 4*lado;
    },
];

//outro exemplo
const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(10));

//Aceitar vários elementos com um array
function showList(empresa, ...clientes) {
	clientes.forEach({cliente} => {
        console.log(cliente, empresa);
    });
}

showList('Google', ['Andre', 'Rafael']);

//somar numeros de dois arrays
const numeros = [10, 5];

const numeros2 = {...numeros, 24, 32};

//também funciona para objeto:
const carro = {
	cor: 'azul',
	portas = 4,
};

//“clone” do carro
carroAno = {...carro};

//modules

//Utilizar funções em outros lugares exportando

export function areaQuadrado (l) {
	return l*1;
}

export function perimetroQuadrado (l) {
	return 4*l;
}

//com o export na frente a gente pode usa-ló em outro arquivo;
//{ } desestruturação
import {areaQuadrado, perimetroQuadrado} from '.caminho.js';

//se eu quiser exportar só uma função não precisaria de desestruturação.
export default function nome () {
    return ;    
}
import nome from '.caminho';

//Funções de callback
fetch('url')
   .then((response) => response.json())
   .then((json) => {
    consonle.log(json);
};

async function fetchProdutos(url) {
   const response = await fetch(url)
   const json = wait response.json();
   return json;
}

const produtos = fetchProdutos(
	'url',
);

// métodos de array: filter e map
const precos = [
	'credito',
	'R$ 200',
	'Contas Pagar',
];

const precosFiltro = precos.filter(function(preco)) {
	return preco.includes('R$');
});

console.log(precoFiltro);

//outra sintaxe para função arrayfunction:
const precosfiltro = precos.filter((p) => p.includes('R$'));

//map
const precoNumeros = precosFiltro.map((preco) =>
    Number(preco.replace('R$', ''))
);

//Expressões
const grupoA = 100;
const grupoB = 200;

const vencedor = grupoA>grupoB? 'Grupo A venceu' : 'Grupo B…';
const active = true;
const button = active && 'Botão está Ativo';

//React para iniciantes
//colocar scripts, da pra usar react no site html

<script type "text/babel">
    function App() {
        return <div>Meu App</div>
    }
    ReactDom.render(<App/>, document.getElementById('app'))
</script>

//react

<script type="text/babel">

//funcao que use estado (useState) começa com 0, o setContador adiciona sempre um elemento quando ocorre o click

const Compras = () => {
  const [contador, setContador] = React.useState(0);
  console.log(contador);
  function comprar() {
    setContador(contador + 1);
  }

  return (
    <div>
      <button onClick={comprar}>Comprar</button>
      <p>Total: {contador}</p>
      <p>Preço: R$ {contador * 250}</p>
    </div>
  )
}


const Button = () => {
  function handleClick(event) {
    console.log(event.target.innerText);
  }

  return <button onClick={handleClick}>Comprar</button>
}

const Titulo = () => {
  const numero = Math.random() * 1000;
  return <h1>Meu Título {numero}</h1>
}

const App = () => {
  return <div>Meu App
  <Compras />
    <Titulo />
    <Button />
    <div>
      Compre aqui também.
      <Button />
    </div>
  </div>
}

//renderização do que foi criado 
ReactDOM.render(<App />, document.getElementById('app'))
</script>

//diferença entre react e js puro

<div id="app-javascript">
    <p>Total: <span id="total"></span></p>
    <p>Preco: R$ <span id="preco"></span></p>
    <button id="button">Comprar</button>
  </div>
  <script type="application/javascript">
    const total = document.getElementById('total');
    const preco = document.getElementById('preco');
    const button = document.getElementById('button');

    let contador = 1;

    function atualizarValores(contador) {
      total.innerText = contador;
      preco.innerText = contador * 250;
    }
    atualizarValores(contador);

    function handleClick() {
      contador = contador + 1;
      atualizarValores(contador);
    }
    button.addEventListener('click', handleClick);
  </script>

  //com react 
  <div id="app-react"></div>

  <script type="text/babel">
    const Comprar = () => {
      const [contador, setContador] = React.useState(1);

      return (
        <div>
          <p>Total: {contador}</p>
          <p>Preço: R$ {contador * 250}</p>
          <button onClick={() => setContador(contador + 1)}>Comprar</button>
        </div>
      )
    }

    ReactDOM.render(<Comprar />, document.getElementById('app-react'));
  </script>
  

