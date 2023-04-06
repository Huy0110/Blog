import { Link } from 'react-router-dom';
import styles from '../css/BlankPage.module.css'
const BlankPage = () => {
    return <div class={styles.emptyPosts}>
    <h2>Hiện không có bài post nào!</h2>
    <Link to='/new'><button class={styles.addPostBtn}>Thêm bài post mới</button></Link>
  </div>
  
}
 
export default BlankPage;