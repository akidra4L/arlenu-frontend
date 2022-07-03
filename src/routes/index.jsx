import { Route, Routes } from "react-router-dom";

import { Main } from "../components/content/main";
import { FAQ } from "../components/content/main-faq";
import { Add } from "../components/content/main-add";
import { MyProjects } from "../components/content/my-projects";

export const RouteList = () => (
  <Routes>
    <Route path="/projects" element={<Main />} />

    <Route path="/add" element={<Add />} />

    <Route path="/faq" element={<FAQ />} />

    <Route path="/my-projects" element={<MyProjects />} />
  </Routes>
);
