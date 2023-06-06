import React ,{ useState } from 'react';
import Img from '../component/img/Logo.png';
import './CardBuy.css';

// 프로필 구매 페이지 작성자 김용우
function CardBuy() {

    const [title , setTitle] = useState('goldblock');

    return(
        <div className="buy">
             {/* <header className='header'>
                {title}
            </header> */}
            <div className="main">

                <h3 className='h3'>명함정보입력</h3>
                
                <div className='main_con'>

                    <img className='left_img' src={Img} />

                    <form className='right_text'>
                        <li>
                            <label>닉네임 :</label>
                            <input type="text" className='nick'></input>
                        </li>
                        <li>
                            <label>직급 :</label>
                            <input type="text" className='position'></input>
                        </li>
                        <li>
                           <label>소속 :</label>
                           <input type="text" className=' attach'></input> 
                        </li>                      
                    </form>
                </div>
                {/* main_con end */}
                
                <div className="buy_cancle">
                    <button className='buy_btn'>구매</button>
                    <button className='cancle_btn'>취소</button>
                </div>
                
            </div>

        </div>

    );
}

export default CardBuy;