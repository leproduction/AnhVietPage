import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const  ReviewPage = () => {


 const random = [
   { id: 1,
    author: "Oscar Wilde",
    quote: "Ngay từ thời điểm bạn hợp tác với Anh Việt, sự chuyên nghiệp của đội ngũ họ đã được thể hiện rõ ràng. Các phiên dịch viên không chỉ thông thạo ngôn ngữ của họ mà còn thông thạo các sắc thái văn hóa, điều này rất quan trọng để phiên dịch chính xác. Họ cư xử hết sức lịch sự, đảm bảo rằng tất cả các bên đều được tôn trọng trong suốt cuộc trò chuyện."
   , background: 'bg-red-500',
   imageAddress: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400"
   },
   { id: 2,
     author: "Rivera Gomet",
     quote: "Một trong những điểm mạnh nhất của Anh Việt là sự chính xác trong cách diễn giải của họ. Cho dù đó là đàm phán kinh doanh, tư vấn y tế hay thảo luận pháp lý, phiên dịch viên của họ đều đảm bảo rằng mọi từ đều được dịch chính xác, duy trì ý nghĩa và giọng điệu ban đầu. Độ chính xác này rất quan trọng để giao tiếp hiệu quả và đã giúp tôi tránh được những hiểu lầm tiềm ẩn trong tương tác của mình."
     , background: 'bg-gray-500',
     imageAddress:"https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg?auto=compress&cs=tinysrgb&w=400"
   }, {
     id: 3,
     author:"Amanda Colden",
     quote: "Anh Việt cung cấp đa dạng các dịch vụ phiên dịch, bao gồm phiên dịch đồng thời, liên tiếp và qua điện thoại. Tính linh hoạt này khiến họ trở thành nhà cung cấp phù hợp cho nhiều tình huống khác nhau, cho dù đó là phiên dịch tại chỗ hay cuộc họp từ xa. Khả năng thích ứng của họ với các tình huống khác nhau rất đáng khen ngợi và đánh giá cao."
     ,imageAddress:"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400"
   }, {id: 4,
     author:"Beatriz Lalipa",
   quote: "Đội ngũ tại Anh Việt luôn sẵn sàng hỗ trợ mọi thắc mắc hoặc yêu cầu đặc biệt. Họ phản ứng nhanh và có sức chứa, đảm bảo đáp ứng các nhu cầu cụ thể của khách hàng. Sự sẵn lòng nỗ lực nhiều hơn nữa trong lĩnh vực dịch vụ khách hàng của họ được thể hiện rõ qua cách tiếp cận được cá nhân hóa và sự dễ dàng trong việc xử lý các yêu cầu khẩn cấp của họ."
   , background: 'bg-purple-500',
   imageAddress:"https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=400"
 }];
 const [currentReview, setCurrentReview] = useState(random[0])
 const [isVisible, setIsVisible] = useState(true);

 //setup UI
 useEffect(() => {
   let timer;
   if(isVisible) {
     timer = setTimeout(()=>{
 const randomIndex = Math.floor(Math.random()* random.length);
 setCurrentReview(random[randomIndex]);
}, [2500]);
   }
return ()=> clearTimeout(timer);
}, [isVisible,random]);
return (
   isVisible?<Container style={{ background: 'rgba(189,195,199, 0.3)' }} fluid className=' d-flex flex-column align-items-center justify-content-center p-1 shadow'>
   <Row className=' p-1 mx-auto my-1'><h3>Reviews</h3></Row>
   <Row><Col><i class="bi bi-star-fill"></i></Col><Col><i class="bi bi-star-fill"></i></Col><Col><i class="bi bi-star-fill"></i></Col><Col><i class="bi bi-star-fill"></i></Col><Col><i class="bi bi-star-fill"></i></Col></Row>
   <Button variant="outline-light" href="" className='text-dark'>Write a review</Button>
 <Row key={currentReview.id} className={`d-flex items-center justify-center text-dark ${currentReview.background} mx-auto p-1`}>
 <Row className='mx-auto' xs={1} md={3}><Image className='mx-auto col-sm-1 col-md-2' roundedCircle src={currentReview.imageAddress}></Image></Row>
 <h3 className="text-xl mb-4">{currentReview.author}:</h3>
 <p className="text-center text-dark">"{currentReview.quote}"</p>
</Row>


     </Container>:null
 );
};

export default ReviewPage;