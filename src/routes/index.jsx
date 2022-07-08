import { Route, Routes } from "react-router-dom";

import { Main } from "../components/content/main";
import { FAQ } from "../components/content/main-faq";
import { Add } from "../components/content/main-add";
import { SignIn } from "../components/content/nav-sign-in";
import { SignUp } from "../components/content/nav-sign-up";
import { MyProjects } from "../components/content/my-projects";

export const RouteList = () => (
  <Routes>
    <Route path="/" element={<Main />} />

    <Route path="/add" element={<Add />} />

    <Route path="/faq" element={<FAQ />} />

    <Route path="/sign-in" element={<SignIn />} />

    <Route path="/sign-up" element={<SignUp />} />

    <Route path="/my-projects" element={<MyProjects />} />
  </Routes>
);
