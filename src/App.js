import { NavBar } from './components/navbar';
import { Footer } from './components/footer';
import { RouteList } from "./routes";
import { BrowserRouter } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <NavBar />
    <main>
      <RouteList />
    </main>
    <Footer />
  </BrowserRouter>
)

export default App;