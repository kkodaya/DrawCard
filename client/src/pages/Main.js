import './Main.css'
import Example from '../component/img/example.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';

// 메인 페이지 작성자 이금철
const Main = () => {
    const [category, setCategory] = useState("ALL");

    return (
        <div className="mainpage">
            {/* 카테고리 영역 */}
            <div className='cate'>
                <button className="catebtn" onClick={()=>{
                    setCategory("ALL")
            }}> ALL <span></span></button>
                <button className="catebtn" onClick={()=>{
                    setCategory("BEST")
            }}> BEST <span></span></button>
                <button className="catebtn" onClick={()=>{
                    setCategory("NORMAL")
            }}> NORMAL <span></span></button>
                <button className="catebtn" onClick={()=>{
                    setCategory("ART")
            }}> ART <span></span></button>
                <button className="catebtn" onClick={()=>{
                    setCategory("EFFECT")
            }}> EFFECT <span></span></button>
            </div>
            
            {category === "ALL" && <>
            {/* 작가 프로필 홍보 영역 */}
            <div className='main_profile'>
                <Link to="/mainprofile" className='main_content'>
                    <div className='main_profileImg'></div>
                </Link>
            </div>


            <div className='subtitle'>최근 등록된 디자인</div>
            {/* 최신 업로드 프로필 영역 */}
            <div className='new_profile'>
                <Link to="/cardDetail" className='new_content'>
                    <div><img src={Example} alt='profile'/></div>
                </Link>
                <div className='new_content'></div>
                <div className='new_content'></div>
            </div>

            <div className='subtitle'>작가 디자인</div>
            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='author_profile1'>
                <div className='author_content1'></div>
                <div className='author_content1'></div>
                <div className='author_content1'></div>
            </div>

            <div className='subtitle'>작가 디자인</div>
            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='author_profile2'>
                <div className='author_content2'></div>
                <div className='author_content2'></div>
                <div className='author_content2'></div>
            </div>
            </>}

            {category === "BEST" && <>
            {/* 작가 프로필 홍보 영역 */}
            <div className='new_profile'>
                <Link to="/cardDetail" className='new_content'>
                    <div><img src={Example} alt='profile'/></div>
                </Link>
                <div className='new_content'></div>
                <div className='new_content'></div>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='author_profile1'>
                <div className='author_content1'></div>
                <div className='author_content1'></div>
                <div className='author_content1'></div>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='author_profile2'>
                <div className='author_content2'></div>
                <div className='author_content2'></div>
                <div className='author_content2'></div>
            </div>
            </>}

            {category === "NORMAL" && <>
            {/* 작가 프로필 홍보 영역 */}
            <div className='new_profile'>
                <Link to="/cardDetail" className='new_content'>
                    <div><img src={Example} alt='profile'/></div>
                </Link>
                <div className='new_content'></div>
                <div className='new_content'></div>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='author_profile1'>
                <div className='author_content1'></div>
                <div className='author_content1'></div>
                <div className='author_content1'></div>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='author_profile2'>
                <div className='author_content2'></div>
                <div className='author_content2'></div>
                <div className='author_content2'></div>
            </div>
            </>}

            {category === "ART" && <>
            {/* 작가 프로필 홍보 영역 */}
            <div className='new_profile'>
                <Link to="/cardDetail" className='new_content'>
                    <div><img src={Example} alt='profile'/></div>
                </Link>
                <div className='new_content'></div>
                <div className='new_content'></div>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='author_profile1'>
                <div className='author_content1'></div>
                <div className='author_content1'></div>
                <div className='author_content1'></div>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='author_profile2'>
                <div className='author_content2'></div>
                <div className='author_content2'></div>
                <div className='author_content2'></div>
            </div>
            </>}

            {category === "EFFECT" && <>
            {/* 작가 프로필 홍보 영역 */}
            <div className='new_profile'>
                <Link to="/cardDetail" className='new_content'>
                    <div><img src={Example} alt='profile'/></div>
                </Link>
                <div className='new_content'></div>
                <div className='new_content'></div>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='author_profile1'>
                <div className='author_content1'></div>
                <div className='author_content1'></div>
                <div className='author_content1'></div>
            </div>

            {/* 작가 이름 및 업로드 프로필 영역 */}
            <div className='author_profile2'>
                <div className='author_content2'></div>
                <div className='author_content2'></div>
                <div className='author_content2'></div>
            </div>
            </>}
        </div>
    );
}

export default Main;