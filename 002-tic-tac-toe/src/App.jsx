import { useState } from "react";
import Square from "./components/Square";
import { checkWinner, checkEndGame } from "./logic/Board";
import { WinnerModal } from './components/WinnerModal.jsx'

const TURNS = {
  X: "x",
  O: "o",
};



function App() {
  /* Nos interesa que el board sea un estado. Recuerda que cada vez que cambia un estado, 
  se renderiza de nuevo el componente. Queremos que se renderice el tablero si cambia el estado */

  /* Recuerda que useState devuelve un array con dos elementos. El primero es el estado y el
   segundo es la función que lo actualiza */
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); // Null = No hay ganador, False = Empate


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }


  const updateBoard = (index) => {
    // ¿Por qué creamos una nueva copia? Porque no podemos modificar el estado
    // directamente. Si lo hacemos, React no se entera de los cambios y no renderiza
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = checkWinner(index, newBoard);
    console.log("Winner:", newWinner);
    if (newWinner) {
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}> Volver a empezar </button>
      <section className="game">
        {/* Acuerdate de que .map devuelve un array al que se le aplica una función*/}
        {/* Cuando se renderiza, React necesita un unique key para mostrar los datos si cambia algo en el DOM */}
        {/* En este caso, el key es el index, que es único para cada elemento */}
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        {/* Prop isSelected. Cuando turno = turno actual */}
        <Square isSelected={turn === TURNS.X}> {TURNS.X} </Square>
        <Square isSelected={turn === TURNS.O}> {TURNS.O} </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default App;
