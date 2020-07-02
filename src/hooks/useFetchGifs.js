import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(categoria).then(images => setstate({
            data: images,
            loading: false
        }));
    }, [categoria]);

    return state;
}