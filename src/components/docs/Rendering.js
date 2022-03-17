// Um elemento descreve o que você quer ver na tela
const element = <h1>Hello, world</h1>;

// Para renderizar um elemento React em um nó raiz, passe ambos para ReactDOM.render()
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));

// A única forma até agora, de atualizar a interface é criar um novo elemento e passá-lo para ReactDOM.render().
function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}
  
setInterval(tick, 1000);