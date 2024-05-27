import { useState, useEffect } from "react";


export function useCatImage ({ fact }) {
    const [catImage, setImage] = useState(null);

    useEffect(() => {
        if (!fact) return

        const firstWord = fact.split(" ")[0];
        console.log(firstWord)

        fetch(`https://cataas.com/cat/says/${firstWord}`)
            .then(res => res.json())
            .then(res => {
                const { url } = res
                setImage(url)
            })
         } ,[fact])

    return { catImage }
        }
