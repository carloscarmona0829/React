import ContactForm from "./components/ContactForm";
import CrudApi from "./components/CrudApi";
import CrudAPP from "./components/CrudAPP";
import SelectAnidados from "./components/SelectsAnidados";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <hr />
      <ContactForm />
      <hr />
      <SelectAnidados />
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
