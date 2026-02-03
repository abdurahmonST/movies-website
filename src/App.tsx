import { BrowserRouter } from "react-router-dom";
import Main from "./layout/main";

// App controls 
const App = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};

export default App;
