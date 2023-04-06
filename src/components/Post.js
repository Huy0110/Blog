import { memo, useState } from "react";
import styles from "../css/Post.module.css";
import { createBrowserHistory } from "@remix-run/router";

const Post = memo((props) => {
    const {id, title, image, description} = {...props}
    console.log("image: ",id, image)
    // const imageUrl = URL.createObjectURL(image);
    const imageUrl = ""
    const history = createBrowserHistory();
    
    const handleClick = () => {
        history.push(`post/${id}`);
        window.location.reload();
    }
  return (
    <div onClick={handleClick}>
      <div className={styles.post}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.content}>
          <img src={image} alt="Ảnh minh họa" />
          <div className={styles.content_text}>
          {description}
            </div>
        </div>
      </div>
    </div>
  );
});

export default Post;
