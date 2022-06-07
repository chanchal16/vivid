import React,{useState,Suspense} from 'react'
import { useRoutes } from "react-router-dom";
import { Navbar } from "./components/common/Navbar";
import { ROUTES } from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PostModal = React.lazy(()=>import("features/posts/PostModal"));

function App() {
  const [showEmojiContainer,setShowEmojiContainer] = useState(false);
  const routeElement = useRoutes(ROUTES)
  return (
    <div className='App'>
      <Navbar/>
      <ToastContainer autoClose={1000} pauseOnFocusLoss={false} />
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
