
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./containers/home";
import Error404 from "./containers/errors/Error404";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/*Errror 404*/}
          <Route path="*" element={<Error404 />} />

          {/*Home*/}
          <Route exact path="/" element={<Home />} />


        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
