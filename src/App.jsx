import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Activities } from "./components/page/Activities";
import { Contact } from "./components/page/Contact";
import { HomePage } from "./components/page/HomePage";
import { News } from "./components/page/News";
import { Team } from "./components/page/Team";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/news" element={<News />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
