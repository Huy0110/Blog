import React from 'react'
import { useState } from 'react';
import styles from '../css/Update.module.css'
import { createBrowserHistory } from "@remix-run/router";
import { useParams } from 'react-router-dom';

const Update = () => {
    let posts = []
    if(!localStorage.getItem("posts")){
      posts = []
    } else {
      posts = JSON.parse(localStorage.getItem("posts"))
    }
    const { id } = useParams();
    const currentPost = posts.find(post => post.id === id)
    // const {oldTitle, oldDescription, oldImage} = currentPost
    console.log("cur: ",currentPost)
    // console.log(oldTitle)
  const [title, setTitle] = useState(currentPost.title);
  const [description, setDescription] = useState(currentPost.description);
  const [image, setImage] = useState(currentPost.image);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Title: ", title);
    console.log("Description: ", description);
    console.log("Image: ", image);
    // Xử lý logic của bạn ở đây
    let posts = []
    if(!localStorage.getItem("posts")){
      posts = []
    } else {
      posts = JSON.parse(localStorage.getItem("posts"))
    }

    const index = posts.findIndex((post) => post.id === id);
    const updatedPosts = [...posts];
    updatedPosts[index] = { ...updatedPosts[index], title: title, description: description, image: image}

    localStorage.setItem("posts", JSON.stringify(updatedPosts))
    console.log(localStorage.getItem("posts"))
    setDescription("")
    setImage("")
    setTitle("")
    const history = createBrowserHistory();
    history.push('/');
        window.location.reload();
  };

  return (
    <div className={styles.Newcontainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <label for="title">Tiêu đề:</label>
          <input
            type="text"
            value={title}
            id="title" name="title"
            placeholder='Tiêu đề'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.formRow}>
          <label for="image">Ảnh:</label>
          <input
            type="text"
            value={image}
            id="title" name="image"
            placeholder='image url'
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className={styles.formRow}>
          <label for="content">Mô tả:</label>
          <textarea
            value={description}
            id="content" name="content"
            placeholder='Viết những gì bạn muốn viết'
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Update</button>
      </form>
    </div >
  );
}

export default Update