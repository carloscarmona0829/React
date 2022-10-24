import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const MainContext = ({ texts, auth }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme}>
      <p>{texts.mainWelcome}</p>
      <p>{texts.mainHello}</p>
      <p>{texts.mainContent}</p>
    </main>
  );
};

export default MainContext;
