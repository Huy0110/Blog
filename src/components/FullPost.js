import styles from '../css/FullPost.module.css'
import { memo } from 'react'
import { useParams } from 'react-router-dom';

const FullPost = memo((props) => {
    const postList = [
        {
          id: "1",
          tittle: "Cách để luộc trứng",
          img_src:
            "https://ledgernote.com/wp-content/uploads/2016/02/madonna-rich.png",
          content:
            "Đảm bảo thịt gà đã rã đông hoàn toàn nếu được đông lạnh. Thịt đông lạnh sẽ ảnh hưởng đến thời gian nấu gà và có thể khiến thịt chín không đều. Nếu thịt vẫn còn đông cứng, hãy hoàn tất việc rã đông gà trong tủ lạnh trước khi nấu. Trứng luộc là nguyên liệu tuyệt vời cho món trứng nhồi, sa lát trứng, hoặc có thể ăn chay như một món ăn nhẹ giàu đạm, giúp no bụng. Tuy nhiên, nếu thành phẩm của bạn luôn là những quả trứng luộc nứt vỏ và lòng đỏ có màu xanh lá thì có nghĩa rằng bạn chưa có được một quả trứng luộc ngon nhất. May mắn thay, có nhiều cách để luộc được những quả trứng ngon nhất. Đặc biệt là bạn có thể học theo những cách đơn giản dưới đây chỉ trong một vài phút!",
        },
        {
          id: "2",
          tittle: "Cách để luộc thịt",
          img_src:
            "https://ledgernote.com/wp-content/uploads/2016/02/madonna-rich.png",
          content:
            "Để luộc thịt ngon, sạch và không bị hôi, bạn cần chần qua thịt. Cho nước vào nồi, thả 2 nhánh sả vào cùng với 1/3 thìa cà phê muối hạt, khi nước sôi mới thả thịt vào và chần qua trong khoảng 2 phút. Muối hạt và tinh dầu sả sẽ khử mùi hôi và làm sạch thịt.",
        },
        {
          id: "3",
          tittle: "Cách để luộc gà",
          img_src:
            "https://ledgernote.com/wp-content/uploads/2016/02/madonna-rich.png",
          content:
            "Cách luộc gà ngon là một bí quyết nấu nướng mà bất kì chị em nội trợ nào cũng cần biết để có thể chế biến ra những món ăn ngon từ gà, đảm bảo tính thẩm mĩ và giá trị dinh dưỡng của món ăn.",
        },
      ];
    const { id } = useParams();
    const currentPost = postList.find(post => post.id === id)
    // const {id, tittle, src, content} = {...props}
    return <div class={styles.newsPage}>
    <h1 class={styles.newsTitle}>{currentPost.tittle}</h1>
    <div class={styles.newCcontent}>
      {currentPost.content}
    </div>
  </div>
  
})
 
export default FullPost;