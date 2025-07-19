import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const  ReviewPage = () => {


 const random = [
  {
    id: 1,
    author: "Oscar Wilde",
    quote:
      "From the moment I placed my order with RM Straps, their professionalism was clear. The strap was crafted with precision, made from high-quality material, and fit my watch perfectly. Their customer service was polite and attentive, making the entire experience smooth and reliable.",
    background: "bg-red-500",
    imageAddress:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    author: "Rivera Gomet",
    quote:
      "One of the strongest points of RM Straps is their attention to detail and quality. From the stitching to the material, every aspect of the strap was excellent. I’ve worn it daily and it still looks brand new. Definitely worth every dollar!",
    background: "bg-gray-500",
    imageAddress:
      "https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    author: "Amanda Colden",
    quote:
      "RM Straps offers a wide variety of watch straps, including sailcloth, nylon, and leather. This gave me the flexibility to choose the right one for each of my watches. Their ability to adapt to different needs is truly impressive.",
    imageAddress:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    author: "Beatriz Lalipa",
    quote:
      "The team at RM Straps is always ready to assist with any questions or special requests. Their response time is fast and they go the extra mile to meet customer needs. Their personalized service and ability to handle urgent orders really stand out.",
    background: "bg-purple-500",
    imageAddress:
      "https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];
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
