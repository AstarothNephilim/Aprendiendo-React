import { useEffect, useState } from 'react';
import { getCatFact } from '../services/facts';

export function useCatFact () {
    const [fact, setFact] = useState(null);
  
    const refreshFact = () => {
      getCatFact().then((fact) => setFact(fact));
  
    }
    
    useEffect(refreshFact, []);
  
  
    return { fact, refreshFact };}