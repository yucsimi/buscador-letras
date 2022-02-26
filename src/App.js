import './App.css';
import React from 'react';
import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario.js';
import CategoriasProvider from './context/CategoriaaContext';
import RecetasProvider from './context/RecetasContext';
import ListaRecetas from './Componentes/ListaRecetas';
import ModalProvider from './context/Modal';


function App() {
  return (
    < CategoriasProvider >
      <RecetasProvider>
        <ModalProvider>
          <Header />

          <div className='container mt-5'>

            <div className='row'>
              <Formulario />

            </div>

            <ListaRecetas />
          </div>


        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider >
  );
}

export default App;
