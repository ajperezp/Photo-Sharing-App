import React, { useEffect, useState } from "react";
import Post from "./components/Post";
import "./App.css";

const mockPosts = [
  {
    likes: 18,
    description: "First Photo",
    image: {
      url: "/uploads/matthew_landers_v_Ydqd4ck_SM_unsplash_f41120fb50.jpg",
    },
  },
  {
    likes: 35,
    description: "Second Photo",
    image: {
      url: "/uploads/matthew_landers_v_Ydqd4ck_SM_unsplash_f41120fb50.jpg",
    },
  },
  {
    likes: 50,
    description: "Third Photo",
    image: {
      url: "/uploads/matthew_landers_v_Ydqd4ck_SM_unsplash_f41120fb50.jpg",
    },
  },
];

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("http://localhost:1337/posts");
      const data = await response.json();
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <div className="App">
      {posts.map((post) => (
        <Post
          key={post.description}
          likes={post.likes}
          description={post.description}
          url={post.image && post.image.url}
        />
      ))}
    </div>
  );
}

export default App;
