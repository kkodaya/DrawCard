import React ,{ useState } from 'react';
import Img from '../component/img/Logo.png';
import './CardDetail.css';
import { Link } from "react-router-dom";

// 프로필 상세 페이지 작성자 김용우
function CardDetail() {
  
  const [title , setTitle] = useState('goldblock');
  // const [명함이미지 , 명함이미지변경] =useState(time)

  // 밑에두개는  나중에 데이터를 받아와서 넣기
  const [designCategori,setCategori] = useState('Anna Lucia x Gees Bend Quilters: Generations')
  const [designName, setDesignName] = useState('Generation 253')
  const [designerName, setDesignerName] = useState('Owned by 49E635')
  const [designEx, setDesignEx] = useState('By ARSNL_Anna_Lucia_Gees...Generations is a collaboration between generative artist Anna Lucia and the quilters of Gees Bend. Anna Lucia developed an algorithm to craft a series of digital quilts inspired by the iconic patchworks of the Quilters of Gees Bend.')
  const [designPrice , setDesignPrice] = useState ('0.3 ETH')
  const [designPriceWon , setDesignPriceWon] = useState ("$549.49")

 

  return (
   
    <div className="CardDetail">
        {/* <header className='header'>
             {title}
        </header> */}

     
        
        <div className="main">
            <div className='main_contents'>
                <img className='left_img' src={Img} />
          
                    
                <ul className='right_text'>
                      <li>{designCategori}</li>
                      <li>{designName} {designName}</li>
                      <li>{designerName}</li>
                      <li>{designEx}</li>
                      <li>
                        {designPrice}  <span>{designPriceWon}</span>
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
