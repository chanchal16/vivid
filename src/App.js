import { useRoutes } from "react-router-dom";
import { Navbar } from "./components/common/Navbar";
import { ROUTES } from "./routes";

function App() {
  const routeElement = useRoutes(ROUTES)
  return (
    <div className='App'>
      <Navbar/>
      <main>
      {routeElement}
      </main>
    </div>
  );
}

export default App;
