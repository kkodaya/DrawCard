import React from 'react'
import './MainProfile.css'
import { Container,Col,Row } from 'react-bootstrap'
import Navbar from '../component/Navbar'
import MenuButton from '../component/MenuButton'
import ProductCard from '../component/ProductCard'

// 프로필 페이지 작성자 이현일
const MainProfile = () => {
  return (
    <div className="profile">

      <Container>

      {/* <Navbar/> */}
      <ProductCard/>
      <h2>프로필 이름</h2>
      <hr></hr>

      <div className="menu-buttons">
      <MenuButton name="구매 목록"/>
      <MenuButton name="판매 목록"/>
      <MenuButton name="판매 등록"/>
      </div>

      <Row>
          <Col lg="4" ><ProductCard/></Col>
          <Col lg="4" ><ProductCard/></Col>
          <Col lg="4" ><ProductCard/></Col>
          <Col lg="4" ><ProductCard/></Col>
          <Col lg="4" ><ProductCard/></Col>
          <Col lg="4" ><ProductCard/></Col>
          <Col lg="4" ><ProductCard/></Col>
          <Col lg="4" ><ProductCard/></Col>

        </Row>


    </Container>


    </div>
  )
}

export default MainProfile