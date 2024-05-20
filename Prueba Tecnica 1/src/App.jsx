import { useState, useEffect } from "react";
import Fact from "./components/Fact";
import "./App.css";

function App() {
  const [catFact, setFact] = useState(null);
  const [catImage, setImage] = useState(null);

  const getCatFact = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    setFact(data.fact);
  };

  useEffect(() => {
    if (catFact) {
      setImage(`https://cataas.com/cat/says/${catFact.split(" ")[0]}`);
    }
  }, [catFact]);

  return (
    <main>
      <h1>Prueba Técnica 1</h1>

      <section>
        <button onClick={getCatFact}>Obtener un hecho sobre gatos</button>

        {catFact && <Fact catFact={catFact} />}
      </section>
    </main>
  );
}

export default App;
