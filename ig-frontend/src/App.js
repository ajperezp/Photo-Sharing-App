import React from "react";
import Post from "./components/Post";
import "./App.css";

const posts = [
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
  return (
    <div className="App">
      {posts.map((post) => (
        <Post
          likes={post.likes}
          description={post.description}
          url={post.image && post.image.url}
        />
      ))}
    </div>
  );
}

export default App;
