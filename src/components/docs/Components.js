import React from 'react';

/* ======================================= Componentes de Função e Classe ======================================= */

// Definir um componente é escrever uma função JavaScript
function BemVindo(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Você também pode usar uma classe ES6 para definir um componente
class BemVindo extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

/* ======================================= Renderizando um Componente ======================================= */

// Componentes definidos pelo usuário
const element = <Welcome name="Sara" />;

// Código renderiza “Hello, Sara” na página
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);

/* ======================================= Compondo Componentes ======================================= */

// Um componente App que renderiza Welcome muitas vezes
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/* ======================================= Extraindo Componentes ======================================= */

// Dividir componentes em componentes menores
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

// Extrair Avatar
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

// Simplificar Comment um pouco
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

// extrair o componente UserInfo que renderiza um Avatar ao lado do nome do usuário
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
// Simplificar Comment ainda mais
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

/* ======================================= Props são Somente Leitura ======================================= */
// Funções “puras” porque elas não tentam alterar suas entradas e sempre retornam o mesmo resultado para as mesmas entradas
function sum(a, b) {
  return a + b;
}

// Função é impura porque altera sua própria entrada
function withdraw(account, amount) {
  account.total -= amount;
}

export default BemVindo;
