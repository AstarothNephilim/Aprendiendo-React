import { useState, useEffect } from "react";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // Importante que si defino una función como handleMove definirla dentro de useEffect porque si no se ejecutará cada vez que se renderice el componente

  //RECUERDA QUE JAMAS PUEDES METER UN HOOK DENTRO DE UNA CONDICIONAL.
  useEffect(() => {
    console.log("EFECTIVAMENTE", { enabled });
    const handlemove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener("pointermove", handlemove);
    }

    return () => {
      window.removeEventListener("pointermove", handlemove);
    };
  }, [enabled]);

  return (
    <main>
      <div
        style={{
          position: "absolute", // Sets the position of the element to be absolute
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Sets the background color of the element to a semi-transparent black
          border: "1px solid #fff", // Sets a 1px solid white border around the element
          borderRadius: "50%", // Sets the border radius of the element to make it circular
          opacity: 0.8, // Sets the opacity of the element to 0.8 (80%)
          pointerEvents: "none", // Disables pointer events on the element, so it cannot be interacted with
          left: -20, // Sets the left position of the element to -20px
          top: -20, // Sets the top position of the element to -20px
          width: 40, // Sets the width of the element to 40px
          height: 40, // Sets the height of the element to 40px
          transform: `translate(${position.x}px, ${position.y}px)`, // Translates the element 220px to the right and 220px down
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Activar" : "Desactivar"} seguimiento de puntero.
      </button>
    </main>
  );
}

export default App;
