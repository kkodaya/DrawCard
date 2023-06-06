import './Main.css'
import Example from '../component/img/example.png'
import { Link } from 'react-router-dom';

// 메인 페이지 작성자 이금철
const Main = () => {
    return (
        <div className="mainpage">
            {/* 카테고리 영역 */}
            <div className='cate'>
                <span>All</span>
                <span>BEST</span>
                <span>NORMAL</span>
                <span>ART</span>
                <span>EFFECT</span>
            </div>

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
        </div>
    );
}

export default Main;