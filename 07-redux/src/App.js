import './App.css';
import { ContadorRedux } from './components/ContadorRedux';
import TeoriaRedux from './components/TeoriaRedux';

function App() {
  return (
    <div style={{ textAlign: "center" }}>
        <h1>Contador con Redux</h1>  
        <ContadorRedux/>
        <hr />
        <h1>Redux</h1>  
        <TeoriaRedux />
      </div>
  );
}

export default App;
