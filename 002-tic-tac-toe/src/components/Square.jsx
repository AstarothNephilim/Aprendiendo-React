/* Nos interesa crear componentes para poder manejar los estados */
/* En este caso, vamos a crear un componente para cada celda del tablero */

/* La prop children pasa todo los elementos que están dentro del parent */
const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = `square ${isSelected ? "is-selected" : ""}`;
  
    const handleClick = () => {
      updateBoard(index);
    };
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    );
  };

export default Square;