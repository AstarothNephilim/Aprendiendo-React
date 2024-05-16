const TURNS = {
  X: "x",
  O: "o",
};

const board = Array(9).fill(null);

/* Nos interesa crear componentes para poder manejar los estados */
/* En este caso, vamos a crear un componente para cada celda del tablero */

/* La prop children pasa todo los elementos que están dentro del parent */
const Square = ({ children, updateBoard, index }) => {
  return (
    <div className="square">
      {children}
    </div>
  )
}

function App() {
  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {/* Acuerdate de que .map devuelve un array al que se le aplica una función*/}
        {/* Cuando se renderiza, React necesita un unique key para mostrar los datos si cambia algo en el DOM */}
        {/* En este caso, el key es el index, que es único para cada elemento */}
        {board.map((_, index) => {
          return (
            <Square key={index} index = {index}>
              
            </Square>
          );
        })}
      </section>
    </main>
  );
}

export default App;
