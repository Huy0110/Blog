import { memo, useState } from "react";
import styles from "../css/Post.module.css";
import { createBrowserHistory } from "@remix-run/router";
import { Link } from "react-router-dom";

const Post = memo((props) => {
  const { id, title, image, description } = { ...props };
  console.log("image: ", id, image);
  // const imageUrl = URL.createObjectURL(image);
  const history = createBrowserHistory();

  const handleClick = () => {
    history.push(`post/${id}`);
    window.location.reload();
  };

  const handleDelete = () => {
    const confirmed = window.confirm("Bạn có chắc muốn xóa không?");
    if (confirmed) {
      // Xóa dữ liệu ở đây
      let posts = [];
      if (!localStorage.getItem("posts")) {
        posts = [];
      } else {
        posts = JSON.parse(localStorage.getItem("posts"));
      }
      let updatedPost = posts.filter((item) => item.id !== id);
      localStorage.setItem("posts", JSON.stringify(updatedPost));
      window.location.reload();
    }
  };

  const handleUpdate = () => {
    history.push(`post/${id}/edit`);
    window.location.reload();
  };
  return (
    <div>
      <div className={styles.post}>
        <div className={styles.title_wrapper}>
          <div className={styles.action_buttons}>
            <button className={styles.edit_button} onClick={handleUpdate}>
              Sửa
            </button>
            <button className={styles.delete_button} onClick={handleDelete}>
              Xóa
            </button>
          </div>
          <h2 className={styles.title} onClick={handleClick}>
            {title}
          </h2>
        </div>
        <div className={styles.content} onClick={handleClick}>
          <img src={image} alt="Ảnh minh họa" />
          <div className={styles.content_text}>{description}</div>
        </div>
      </div>
    </div>
  );
});

export default Post;
