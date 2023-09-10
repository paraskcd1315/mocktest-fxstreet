import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { loadPostsAsync } from "../features/posts/postsSlice";
import './App.scss';
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../screens/content/Content";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostsAsync());
  }, [dispatch]);

  return <div className="App">
    <div className="dashboard">
      <Sidebar />
      <div className="spacer"></div>
      <Content />
    </div>
  </div>
}