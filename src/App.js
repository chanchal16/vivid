import React,{useState,Suspense} from 'react'
import { useRoutes } from "react-router-dom";
import { Navbar,Footer } from "./components";
import { ROUTES} from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
const PostModal = React.lazy(()=>import("features/posts/PostModal"));

function App() {
  let {user} = useSelector(state => state.auth);
  const [showEmojiContainer,setShowEmojiContainer] = useState(false);
  const routeElement = useRoutes(ROUTES);
  return (
    <div className='App'>
      {user?.token && <Navbar/>}
      <ToastContainer autoClose={1000} pauseOnFocusLoss={false} />
      <main className='app-container'>
      {routeElement}
      <Suspense fallback={<div></div>}>
        <PostModal showEmojiContainer={showEmojiContainer} setShowEmojiContainer={setShowEmojiContainer} />
      </Suspense>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
