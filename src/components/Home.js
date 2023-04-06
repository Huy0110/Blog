import React from "react";
import Post from "./Post";
import styles from "../css/Home.module.css";
import BlankPage from "./BlankPage";
import { Link } from "react-router-dom";

const Home = () => {
  let posts = []
    if(!localStorage.getItem("posts")){
      posts = []
    } else {
      posts = JSON.parse(localStorage.getItem("posts"))
    }

  return (
    posts.length === 0 ? <BlankPage /> :
    <div className={styles.home}>
      {
        posts.map(post => <Post key={`${post.id}`} {...post} />)
      }
      <Link to='/new'><button className={styles.addPostBtn}>Thêm bài post mới</button></Link>
    </div>
  );
};

export default Home;
