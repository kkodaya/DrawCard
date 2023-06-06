import React ,{ useState } from 'react';
import Img from '../component/img/Logo.png';
import './CardDetail.css';
import { Link } from "react-router-dom";

// 프로필 상세 페이지 작성자 김용우
function CardDetail() {
  
  const [title , setTitle] = useState('goldblock');
  // const [명함이미지 , 명함이미지변경] =useState(time)

  // 밑에두개는  나중에 데이터를 받아와서 넣기
  const [designCategori,setCategori] = useState('디자인 카테고리')
  const [designName, setDesignname] = useState('디자인이름')
  const [designerName, setDesignername] = useState('디자이너이름')
  const [designEx, setDesignex] = useState('디자인설명')
  const [designPrice , setDesignPrice] = useState('디자인 가격')
 

  return (
   
    <div className="CardDetail">
        {/* <header className='header'>
             {title}
        </header> */}

     
        
        <div className="main">
            <div className='main_con'>
                <img className='left_img' src={Img} />
          
                    
                <ul className='right_text'>
                      <li>{designCategori}</li>
                      <li>{designName} {designName}</li>
                      <li>{designerName}</li>
                      <li>{designEx}  {designEx} {designEx}  {designEx} {designEx}  {designEx} {designEx}  {designEx}</li>
                      <li>
                        {designPrice}
                            <Link to="/cardbuy" className='button'>
                                구매하기
                            </Link>
                      </li>
                </ul>
            </div> 
        </div>
       
    
    </div>
    
    
  );
}

export default CardDetail;
