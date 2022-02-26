import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

//crear el context

export const CategoriasContext = createContext()

//hay que crear un provider que es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {


    //state del context


    const [categorias, guardarCategorias] = useState([])


    //lamado a la api
    useEffect(() => {

        const obtenerCategorias = async () => {

            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
            const categorias = await axios.get(url)

            guardarCategorias(categorias.data.drinks)
        }
        obtenerCategorias()
    }, [])
    return (

        <CategoriasContext.Provider
            value={{ categorias }}
        >

            {props.children}
        </CategoriasContext.Provider>
    )


}

export default CategoriasProvider;