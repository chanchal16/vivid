import { useRoutes } from "react-router-dom";
import { ROUTES } from "./routes";

function App() {
  const routeElement = useRoutes(ROUTES)
  return (
    <div className='App'>
      <main>
      {routeElement}
      </main>
    </div>
  );
}

export default App;
