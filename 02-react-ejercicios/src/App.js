import CrudApi from "./components/CrudApi";
import CrudAPP from "./components/CrudAPP";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudAPP />
    </>
  );
}

export default App;
