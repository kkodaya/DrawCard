import './Header.css';
import { Link } from 'react-router-dom';
import Logo from './img/Logo.png';
import { useState } from 'react';


// 헤더 페이지 작성자 이금철
const Header = () => {
    const [userInput, setUserState] = useState('');

    return (
        <header className='header'>
            
            <div className='contents'>

                {/* 로고 영역 */}
                <div className='logo_area'>
                    <Link to={"/"}>
                        <img src={Logo} alt='Logo' className='logo'/>
                    </Link>
                </div>

                {/* 검색 영역 */}
                <div className='search_area'>
                    <div className="input-container">
                        <input type="text" name="text" className="input" placeholder="search..."/>
                        <span className="icon"> 
                            <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </span>
                    </div>
                </div>

                {/* 메뉴 영역 */}
                <div className='menu_area'>
                    <a className="fancy" href="#">
                        <span className="top-key"></span>
                        <span className="text">wallet</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </a>

                    
                    
                    <Link to='/mainprofile' className="fancy" href="#">
                        <span className="top-key"></span>
                        <span className="text">profile</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </Link>
                </div>
            </div>

            {/* <button type="button" onClick={handdleConnect}>{active ? 'disconnect':'connect'}</button> */}
        </header>
    );
}

export default Header;