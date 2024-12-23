import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Activities } from "./components/page/Activities";
import { Contact } from "./components/page/Contact";
import { Home } from "./components/page/Home";
import { Layout } from "./components/page/Layout";
import { News } from "./components/page/News";
import { OneArticle } from "./components/page/OneArticle";
import { Team } from "./components/page/Team";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:ident" element={<OneArticle />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/activities/:ident" element={<OneArticle />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
