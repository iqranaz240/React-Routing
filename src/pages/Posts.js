import { Outlet } from "react-router-dom";
import PostLists from "../components/PostList";

export default function Posts() {
  
    return (
      <div style={{ padding: 20 }}>
        <h2>Blog</h2>
        <PostLists/>
        <Outlet />
      </div>
    );
  }
