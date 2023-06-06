import React from 'react'
import Navbar from '../component/Navbar'
import MenuButton from '../component/MenuButton'
import { Container,Button } from 'react-bootstrap'

// 프로필 판매 페이지 작성자 이현일
const ProfileSell = () => {
  return (
    <div>
      <Container>
      <Navbar/>
 
      <div className="menu-buttons">
      <MenuButton name="구매 목록"/>
      <MenuButton name="판매 목록"/>
      <MenuButton name="판매 등록"/>
      </div>
       
      <div>

      <div className ="input-area">
        <p>디자인 이름</p>
        <input type="text" style={{width: "370px"}}/>
      </div>

      <div className ="input-area">
        <p>디자인 설명</p>
        <input type="text" style={{width: "370px"}}/>
      </div>

      <div className ="input-area">
        <p>디자인 카테고리</p>
        <input type="text" style={{width: "370px"}}/>
      </div>

      <div className ="input-area">
        <p>디자인 가격</p>
        <input type="text" style={{width: "370px"}}/>
      </div>

      <div className ="input-area">
        <p>디자인 첨부</p>
        <input type="text" style={{width: "370px"}}/>
      </div>

      <div className = "button-area">
      <Button variant="warning">등록</Button>{' '}
      <Button variant="warning">등록</Button>{' '}
      </div>

      </div>

      </Container>


    </div>
  )
}

export default ProfileSell