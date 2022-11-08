import './App.css';
import { ContadorRedux } from './components/ContadorRedux';
import { CrudApi } from './components/CrudApi';
import { ShoppingCart } from './components/ShoppingCart';
import TeoriaRedux from './components/TeoriaRedux';

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>CrudAPI con ReduxToolkit</h1> 
      <CrudApi />
        <hr />
        <h1>Carrito de Compras con ReduxToolkit</h1>
      <ShoppingCart />
        <hr />
        <h1>Contador con ReduxToolkit</h1>  
        <ContadorRedux/>
        <hr />
        <h1>Redux</h1>  
        <TeoriaRedux />
      </div>
  );
}

export default App;
