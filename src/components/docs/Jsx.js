// É uma extensão de sintaxe para JavaScript
const element = <h1>Hello, world!</h1>;

// Declaramos uma variável chamada name e então a usamos dentro do JSX ao envolvê-la com chaves
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);

// Incorporamos o resultado da chamada de uma função JavaScript, formatName(user), dentro de um elemento <h1>
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
  
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);

// Usar JSX dentro de condições if e laços for, atribuí-lo a variáveis, aceitá-lo como argumentos e retorná-los de funções
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

// Usar aspas para especificar strings literais como atributos:
const element = <div tabIndex="0"></div>;

// Usar chaves para incorporar uma expressão JavaScript em um atributo:
const element = <img src={user.avatarUrl}></img>;

// Se uma tag está vazia, você pode fechá-la imediatamente com />, como XML
const element = <img src={user.avatarUrl} />;

// Elementos filhos
const element = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
);

// É seguro incorporar entradas de usuário em JSX
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;

// O Babel compila JSX para chamadas React.createElement()
const element = (
    <h1 className="greeting">
      Hello, world!
    </h1>
);

// === Estes dois exemplos são idênticos

const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);

// React.createElement() realiza algumas verificações para ajudar você a criar um código sem bugs, mas, essencialmente, cria um objeto como este

// Nota: esta estrutura está simplificada
const element = {
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, world!'
    }
};