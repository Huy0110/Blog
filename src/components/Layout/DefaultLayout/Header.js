import React from "react";
import styles from "../../../css/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img
          src="https://upload.wikimedia.org/wikipedia/vi/0/02/DotBlog_domain_logo.png"
          alt="logo"
        />
      </Link>
      <div className={styles.items}>
        <Link className={styles.item_text} to="/">
          trang chủ
        </Link>
        <Link className={styles.item_text} to="/new">
          đăng bài
        </Link>

        <div className={styles.item}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
            alt="avt"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
