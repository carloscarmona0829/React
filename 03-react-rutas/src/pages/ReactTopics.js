import { NavLink, Route, Routes, useParams } from "react-router-dom";

const Topic = () => {
    let {topic} = useParams();

    return(
        <div>
            <h4>{topic}</h4>
            <p>Lorem ipsum...</p>
        </div>
    )
};

const ReactTopics = () => {
    return (
      <div>
        <h3>React</h3>
        <ul>
          <li>
            <NavLink activeclassname="active" to="Jsx">
              JSX
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="Props">
              Props
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="Estado">
              Estado
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="Componentes">
              Componentes
            </NavLink>
          </li>
        </ul>
        <Routes>
            <Route path=":topic" element={<Topic />} />
        </Routes>
      </div>
    );
}
 
export default ReactTopics;