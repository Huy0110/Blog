import styles from '../css/FullPost.module.css'
import { memo } from 'react'
import { useParams } from 'react-router-dom';

const FullPost = memo((props) => {
    let posts = []
    if(!localStorage.getItem("posts")){
      posts = []
    } else {
      posts = JSON.parse(localStorage.getItem("posts"))
    }
    const { id } = useParams();
    const currentPost = posts.find(post => post.id === id)
    // const {id, tittle, src, content} = {...props}
    return <div className={styles.newsPage}>
    <h1 className={styles.newsTitle}>{currentPost.title}</h1>
    <div className={styles.newsContent}>
      {currentPost.description}
    </div>
  </div>
  
})
 
export default FullPost;