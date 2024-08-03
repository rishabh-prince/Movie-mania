import { createContext, useState } from "react";

export const MovieContext=createContext(null);

const ContextProvider=(props)=>{
    const [movies,setMovies]=useState([]);

    const addMovies=(item)=>{
        setMovies(item);
    }
    console.log(movies);
    const contextValue={movies,addMovies};

    return (
        <MovieContext.Provider value={contextValue}>
            {props.children}
        </MovieContext.Provider>

    )
}
export default ContextProvider;