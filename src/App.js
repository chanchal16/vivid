import {useState} from 'react'
import { PostModal } from "features/posts/PostModal";
import { useRoutes } from "react-router-dom";
import { Navbar } from "./components/common/Navbar";
import { ROUTES } from "./routes";

function App() {
  const [showEmojiContainer,setShowEmojiContainer] = useState(false);
  const routeElement = useRoutes(ROUTES)
  return (
    <div className='App'>
      <Navbar/>
      <main className='app-container'>
      {routeElement}
       <PostModal showEmojiContainer={showEmojiContainer} setShowEmojiContainer={setShowEmojiContainer} />
      </main>
    </div>
  );
}

export default App;
