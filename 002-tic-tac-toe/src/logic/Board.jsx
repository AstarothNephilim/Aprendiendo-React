export const checkWinner = (index, boardToCheck) => {
    const player = boardToCheck[index];
    console.log("Player:", player);
    // Extraer Row del input:
    let row_start_index = index - (index % 3);

 

    let row = boardToCheck.slice(row_start_index, row_start_index + 3);
    console.log("Row:", row);
    // El método every() comprueba si todos los elementos en un array pasan una prueba
    if (row.every((i) => i === player)) {
      return player;
    }

    // Extraer Columns
    let column_start_index = index % 3;
    let column = [
      column_start_index,
      column_start_index + 3,
      column_start_index + 6,
    ];
    if (column.every((i) => boardToCheck[i] === player)) {
      return player;
    }
    // Extraer Diagonales
    // Check diagonal izquierda a derecha
    if (index % 4 === 0) {
      const leftDiagonal = [0, 4, 8];
      if (leftDiagonal.every((i) => boardToCheck[i] === player)) {
        return player;
      }
    }

    // Check diagonal derecha a izquierda
    if (index % 2 === 0 && index !== 0 && index !== 8) {
      const rightDiagonal = [2, 4, 6];
      if (rightDiagonal.every((i) => boardToCheck[i] === player)) {
        return player;
      }
    }

    return null; // No hay ganador
  };

  export const checkEndGame = (boardToCheck) => {
    if (boardToCheck.every((i) => i !== null)) {
      return true;
    }
  }