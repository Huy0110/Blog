import React from 'react'
import { useState } from 'react';
import styles from '../css/New.module.css'

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label for="title">Tiêu đề:</label>
        <input
          type="text"
          value={title}
          id="title" name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label for="image">Ảnh:</label>
        <input
          type="file"
          accept="image/*"
          id="image" name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <div>
        <label for="content">Mô tả:</label>
        <textarea
          value={description}
          id="content" name="content"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Gửi</button>
    </form>
  );
}

export default New