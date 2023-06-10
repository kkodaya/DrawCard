import React ,{ useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Img from '../component/img/artDC1.png';
import Img2 from'../component/img/example.png';
import './CardDetail.css';
import { Link } from "react-router-dom";



// 프로필 상세 페이지 작성자 김용우
function CardDetail() {
  
  const [title , setTitle] = useState('goldblock');
  // const [명함이미지 , 명함이미지변경] =useState(time)

  // 밑에두개는  나중에 데이터를 받아와서 넣기
  const [designCategori,setCategori] = useState('BEST')
  const [designName, setDesignName] = useState('Generation 253')
  const [designerName, setDesignerName] = useState('Owned by 49E635')
  const [designEx, setDesignEx] = useState('By ARSNL_Anna_Lucia_Gees...Generations is a collaboration between generative artist Anna Lucia and the quilters of Gees Bend. Anna Lucia developed an algorithm to craft a series of digital quilts inspired by the iconic patchworks of the Quilters of Gees Bend.')
  const [designPrice , setDesignPrice] = useState ('0.3 ETH')
  const [designPriceWon , setDesignPriceWon] = useState ("$549.49")
  
  


  // 메인페이지 BEST 카테고리로 이동
  // const navigate = useNavigate();
  
  // const handleClick2 = () => {
  //   navigate('/'); // 이동할 페이지의 경로 설정
    
  // };

  //명함  뒤집기
  const handleClick = () => {
    setIsRotated(!isRotated);
  };
  const [isRotated, setIsRotated] = useState(false);
  

  return (
   
   
    <div className="CardDetail">
        {/* <header className='header'>
             {title}
        </header> */}

     
        
        <div className="main">
            <div className='main_contents'>
                <div className={isRotated && 'rotated'} onClick={handleClick}>
                {isRotated ? (
                  <img src={Img2}alt="First Image" />
                ) : (
                  <img src={Img} alt="Second Image" />
                )}
                    {/* {isRotated ? '../component/img/Logo.png' :  '../component/img/DrawCard.png'} */}
                </div>
          
                    
                <ul className='right_text'>
                      <li><Link to="/" state={{cate_gory:"BEST"}} className="categoriLink">{designCategori}</Link></li>
                      <li>{designName}</li>
                      <li><Link to="/mainprofile" className='profileMove'>{designerName}</Link></li>
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
