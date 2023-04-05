import { memo } from "react";
import styles from "../css/Post.module.css";
import { createBrowserHistory } from "@remix-run/router";

const Post = memo((props) => {
    const {id, title, image, description} = {...props}
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
          <img src="https://ledgernote.com/wp-content/uploads/2016/02/madonna-rich.png" alt="Ảnh minh họa" />
          <div className={styles.content_text}>
          {description}
            </div>
        </div>
      </div>
    </div>
  );
});

export default Post;
