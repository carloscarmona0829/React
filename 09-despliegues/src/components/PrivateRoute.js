import { Navigate } from "react-router-dom";

let auth = true;

const PrivateRoute = ({ component: Component }) => {
  return auth ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
