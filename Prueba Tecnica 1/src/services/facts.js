const CAT_FACT_URL = "https://catfact.ninja/fact";

export const getCatFact = async () => {
    const response = await fetch("CAT_FACT_URL");
    const data = await response.json();
    const {fact} = data; 
    return(fact);
  }; 