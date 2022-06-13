import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import Login from './paginas/login/Login';

import CadastroUsuario from './paginas/CadastroUsuario/CadastroUsuario';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import CadastroTema from './components/temas/CadastroTema/CadastroTema';
import CadastroPostagem from './components/postagens/CadastroPostagem/CadastroPostagem';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import store from './store/Store';
import { Provider } from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (

    <Provider store={store}>

      <ToastContainer/>  

  
      <Router>
        <Navbar />
        <Switch>
          <div style={{ minHeight: "100vh" }}>
  
          <Route exact path="/">
              <Login />
            </Route>
  
            <Route path="/login">
              <Login />
            </Route>
  
            <Route path="/home">
              <Home />
            </Route>
  
            <Route path="/cadastro">
              <CadastroUsuario />
            </Route>
  
            <Route path="/temas">
              <ListaTema />
            </Route>
  
            <Route path="/posts">
              <ListaPostagem />
            </Route>
  
            <Route exact path='/formularioPostagem'>
              <CadastroPostagem />
            </Route>
  
            <Route exact path='/formularioPostagem/:id'>
              <CadastroPostagem />
            </Route>
  
            <Route exact path='/formularioTema'>
              <CadastroTema />
            </Route>
  
            <Route exact path='/formularioTema/:id'>
              <CadastroTema />
            </Route>
  
            <Route path='/deletarPostagem/:id'>
              <DeletarPostagem />
            </Route>
  
            <Route path='/deletarTema/:id'>
              <DeletarTema />
            </Route>
  
          </div>
        </Switch>
        <Footer />
      </Router>
      </Provider>
    );
  }
  
  export default App;

