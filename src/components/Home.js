import React from "react";
import Post from "./Post";
import styles from "../css/Home.module.css";

const Home = () => {
  let posts = []
    if(!localStorage.getItem("posts")){
      posts = []
    } else {
      posts = JSON.parse(localStorage.getItem("posts"))
    }

  return (
    <div className={styles.home}>
      {
        posts.map(post => <Post key={`${post.id}`} {...post} />)
      }
    </div>
  );
};

export default Home;
