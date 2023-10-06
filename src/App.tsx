import Suras from "./components/ListSuras/index";
import Header from "./components/Header";
import { Route, Router, Routes } from "react-router-dom";
// import OneSura from "./components/OneSura";

function App() {
  return (
    <div className="w-full md:w-11/12 lg:container mx-auto relative">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Suras />} />
          {/* <Route path=":id" element={<OneSura />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
