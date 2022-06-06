import React,{useState,Suspense} from 'react'
import { useRoutes } from "react-router-dom";
import { Navbar } from "./components/common/Navbar";
import { ROUTES } from "./routes";
const PostModal = React.lazy(()=>import("features/posts/PostModal"));

function App() {
  const [showEmojiContainer,setShowEmojiContainer] = useState(false);
  const routeElement = useRoutes(ROUTES)
  return (
    <div className='App'>
      <Navbar/>
      <main className='app-container'>
      {routeElement}
      <Suspense fallback={<div></div>}>
        <PostModal showEmojiContainer={showEmojiContainer} setShowEmojiContainer={setShowEmojiContainer} />
      </Suspense>
      </main>
    </div>
  );
}

export default App;
