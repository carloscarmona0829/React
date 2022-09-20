import { useFetch } from "../hooks/useFetch";

const SelectList = ({title, url, handleChange}) => {
  const { data, error, loading } = useFetch(url);
  console.log(data, error, loading);

  //if(!data) return null; //Evita renderizados innecesarios

  let id = `select-${title}`;

  return (
    <>
      <label htmlFor={id}>{title}</label>
      <select name={id} id={id}>
        <option value="">Elige un {title}</option>
      </select>
    </>
  );
};

export default SelectList;
