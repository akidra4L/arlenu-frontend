import { NavBar } from "./components/navbar";
import { Footer } from "./components/footer";
import { BrowserRouter } from "react-router-dom";
import { AuthContext, TokenContext } from "./context/AuthContext";
import { useEffect, useState } from "react";
import { AppRouter } from "./AppRouter";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");

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
      <TokenContext.Provider value={{
        token,
        setToken,
      }}>
        <BrowserRouter>
          <NavBar />
          <main>
            <AppRouter />
          </main>
          <Footer />
        </BrowserRouter>
      </TokenContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
