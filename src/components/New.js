import React from 'react'
import { useState } from 'react';
import styles from '../css/New.module.css'
import { createBrowserHistory } from "@remix-run/router";

const New = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

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

    

    posts.push({
      id: (posts.length + 1).toString(),
      title,
      description,
      image
    })

    localStorage.setItem("posts", JSON.stringify(posts))
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
        <button type="submit">Gửi</button>
      </form>
    </div >
  );
}

export default New