import { NavBar } from "./components/navbar";
import { Footer } from "./components/footer";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useEffect, useState } from "react";
import { AppRouter } from "./AppRouter";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuth(true);
    }
  });

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <NavBar />
        <main>
          <AppRouter />
        </main>
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
