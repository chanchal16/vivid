import { PostModal } from "features/posts/PostModal";
import { useRoutes } from "react-router-dom";
import { Navbar } from "./components/common/Navbar";
import { ROUTES } from "./routes";

function App() {
  const routeElement = useRoutes(ROUTES)
  return (
    <div className='App'>
      <Navbar/>
      <main className='app-container'>
      {routeElement}
       <PostModal/>
      </main>
    </div>
  );
}

export default App;
