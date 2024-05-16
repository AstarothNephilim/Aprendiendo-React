import { useState } from 'react';

const TURNS = {
  X: "x",
  O: "o",
};

/* Nos interesa crear componentes para poder manejar los estados */
/* En este caso, vamos a crear un componente para cada celda del tablero */

/* La prop children pasa todo los elementos que están dentro del parent */
const Square = ({ children,  isSelected,updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick = {handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  /* Nos interesa que el board sea un estado. Recuerda que cada vez que cambia un estado, 
  se renderiza de nuevo el componente. Queremos que se renderice el tablero si cambia el estado */

  /* Recuerda que useState devuelve un array con dos elementos. El primero es el estado y el
   segundo es la función que lo actualiza */
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  const updateBoard = (index) => {
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {/* Acuerdate de que .map devuelve un array al que se le aplica una función*/}
        {/* Cuando se renderiza, React necesita un unique key para mostrar los datos si cambia algo en el DOM */}
        {/* En este caso, el key es el index, que es único para cada elemento */}
        {board.map((_, index) => {
          return (
            <Square 
              key={index}
              index = {index}
              updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className = "turn">
        {/* Prop isSelected. Cuando turno = turno actual */	}
        <Square isSelected = {turn === TURNS.X}> {TURNS.X} </Square>
        <Square isSelected = {turn === TURNS.O}> {TURNS.O} </Square>
      </section>
    </main>
  );
}

export default App;
