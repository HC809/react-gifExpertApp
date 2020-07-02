import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Walter White']);

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr />

            <ol>
                {
                    categorias.map(c => (
                        <GifGrid
                            key={c}
                            categoria={c}
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;