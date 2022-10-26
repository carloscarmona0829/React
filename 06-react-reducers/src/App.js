import './App.css';
import Contador from './components/Contador';
import ContadorMejorado from './components/ContadorMejorado';

function App() {
  return (
    <div>
      <h1>UseReducer</h1>
      <hr />
      <ContadorMejorado />
      <hr />
      <Contador />      
    </div>
  );
}

export default App;
