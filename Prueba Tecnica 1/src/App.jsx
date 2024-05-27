import { useState, useEffect } from "react";
import Fact from "./components/Facts";
import "./App.css";
import { getCatFact } from "./services/facts";
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";

const CAT_FACT_URL = "https://catfact.ninja/fact";
const CAT_IMG_URL = "https://cataas.com/cat/says/";


function App() {
  const {fact, refreshFact} = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }


  return (
    <main>
      <h1>Prueba Técnica 1</h1>

      <section>
        <button onClick={handleClick}>Obtener un hecho sobre gatos</button>

        {fact && <Fact catFact={imageUrl} />}
      </section>
    </main>
  );
}

export default App;
