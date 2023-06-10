import React ,{ useState } from 'react';
import Img from '../component/img/Logo.png';
import Img2 from'../component/img/example.png';
import './CardBuy.css';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';

// 프로필 구매 페이지 작성자 김용우
function CardBuy() {

    const [title , setTitle] = useState('goldblock');

    // 모달 오픈
    const [isModalOpen , setIsModalOpen] = useState(false);

    const openModal = () => {
      
      setIsModalOpen(true);
    };
  
    const closeModal = () =>{
      setIsModalOpen(false);
    };
    // 각인 초기값
    const [userName , setUserName] = useState("");
    const [userPosition , setPosition] = useState("");
    const [userAttach , setAttach] = useState("");

    // 이미지위에 position으로 텍스트올리기 (각인)
    const handler = e =>
    {
        setUserName(e.target.value);
    }
    const handler2 = e =>
    {
        setPosition(e.target.value);
    }
    const handler3 = e =>
    {
        setAttach(e.target.value);
    }
    const [isRotated2, setIsRotated2] = useState(false);
    // 명함 뒤집기
    const handleClick2 = () => {
        setIsRotated2(!isRotated2);
      };
      
      const onCapture = () => {
        const element = document.getElementById('imageWrapper');
        if (element) {
          html2canvas(element).then((canvas) => {
            onSaveAs(canvas.toDataURL('image/png'), 'result.png');
          });
        }
      };
      
      const onSaveAs = (uri: string, filename: string) => {
        const link = document.createElement('a');
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      
    return(
        <div className="buy">
             {/* <header className='header'>
                {title}
            </header> */}
            <div className="main">

                <h3 className='h3'>명함정보입력</h3>
                
                <div className='main_con'>

                    <div id="imageWrapper" className={isRotated2 && 'rotated2'} onClick={handleClick2} >

                            {isRotated2 ? (
                            <img src={Img2}alt="First Image" />
                          ) : (
                            <img src={Img} alt="Second Image" />
                          )}
                      <span>{userName}</span>
                      <span>{userPosition}</span>
                      <span>{userAttach}</span>
                    
                    </div>

                    <ul className='right_text'>
                        <li>
                            <label>닉네임 :</label>
                            <input type="text" className='nick' value={userName} onChange={handler}></input>
                        </li>
                        <li>
                            <label>직급 :</label>
                            <input type="text" className='position' value={userPosition} onChange={handler2}></input>
                        </li>
                        <li>
                           <label>소속 :</label>
                           <input type="text" className=' attach' value={userAttach} onChange={handler3}></input> 
                        </li>                      
                    </ul>
                </div>
                {/* main_con end */}
                
                <div className="buy_cancle">
                  <button className='buy_btn' onClick={openModal}>구매</button>
                  <Link to="/CardDetail" className='cancle_btn'>취소</Link>
              </div>
              
              {isModalOpen && (
                
                <div className="modal2">
                  
                    <h3>입력한 내용은 바꿀수 없습니다 구매하시겠습니까?</h3>
                    <div className='modal_buy_cancle'>
                          <button className='modal_buy' onClick={onCapture}>구매</button>
                          <button className='modal_cancle' onClick={closeModal}>취소</button>
                    </div>
                </div>
                
                
              )}

        </div>

        </div>

    );
}

export default CardBuy;