import {memo} from 'react'
import BreadCrumb from '../theme/breadCrumb';
import "./style.scss"
import { useState } from 'react';
import Ar_1 from '../../../assets/user/images/ariticle/Article.webp';

const ArticlePage = () =>{
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Cảm ơn bạn đã liên hệ! Email: ${email}, Tin nhắn: ${message}`);
        // Xử lý gửi thông tin ở đây
    };
    return <>
    <BreadCrumb name="Liên hệ"/>
    <div className="badminton-article-container container">
        <h1 className="badminton-article-title">Cách chọn vợt cầu lông phù hợp cho người mới bắt đầu</h1>
        <div className="badminton-article-meta">
        <span className="author">Tác giả: Nguyễn Văn A</span>
        <span className="date">Ngày đăng: 12/12/2024</span>
        </div>
        <div className="badminton-article-image">
        <img
            src={Ar_1}
            alt="Vợt Cầu Lông"
            className="badminton-article-img"
        />
        </div>
        <div className="badminton-article-content">
        <p>
            Cầu lông là môn thể thao rất phổ biến ở Việt Nam và trên thế giới. Việc chọn một cây vợt cầu lông phù hợp là yếu tố quan trọng giúp bạn chơi tốt hơn và tránh chấn thương. Bài viết này sẽ giúp bạn hiểu rõ hơn về các yếu tố cần lưu ý khi chọn vợt cầu lông.
        </p>
        <h3>1. Trọng lượng vợt</h3>
        <p>
            Trọng lượng vợt là yếu tố quan trọng đầu tiên bạn cần cân nhắc. Nếu bạn mới bắt đầu, nên chọn vợt có trọng lượng nhẹ để dễ điều khiển và giảm căng thẳng cho cánh tay. Các vợt từ 80-85g là lựa chọn phổ biến cho người mới.
        </p>
        <h3>2. Độ cứng của vợt</h3>
        <p>
            Độ cứng của vợt ảnh hưởng đến khả năng tạo ra sức mạnh khi đánh. Nếu bạn là người mới chơi, vợt mềm sẽ giúp bạn dễ dàng kiểm soát bóng hơn. Các vợt có độ cứng vừa phải hoặc mềm là lựa chọn hợp lý.
        </p>
        <h3>3. Cân bằng vợt</h3>
        <p>
            Vợt cầu lông có thể được chia thành 3 loại cân bằng: đầu nặng, đầu nhẹ, và cân bằng. Người mới chơi nên chọn vợt có cân bằng đầu nhẹ hoặc cân bằng để dễ dàng điều khiển hơn.
        </p>
        <h3>4. Chất liệu của vợt</h3>
        <p>
            Vợt cầu lông được làm từ nhiều chất liệu khác nhau như thép, nhôm, và carbon. Vợt làm từ carbon nhẹ và bền, nhưng giá thành cao. Nếu bạn là người mới chơi, một cây vợt nhôm hoặc thép có thể là lựa chọn tiết kiệm.
        </p>
        <div className="badminton-article-footer">
            <button className="share-btn">Chia sẻ bài viết</button>
            <button className="comment-btn">Bình luận</button>
        </div>
    </div>
</div>
    </>
};

export default memo(ArticlePage);