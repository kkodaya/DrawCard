import React from 'react'
import './MainProfile.css'
import { Container,Col,Row } from 'react-bootstrap'
import Navbar from '../component/Navbar'
import MenuButton from '../component/MenuButton'
import ProductCard from '../component/ProductCard'
import { Link } from 'react-router-dom';

// 프로필 페이지 작성자 이현일
const MainProfile = () => {
  return (
    <div className="profile">

      <Container>
      <ProductCard/>
      <h2>프로필 이름</h2>
      <hr></hr>

      <div className="menu-buttons">
        <Link to='/Mainprofile'>
          <MenuButton name="구매 목록"/>
        </Link>
    
        <Link to='/items'>
        <MenuButton name="판매 목록"/>
        </Link>

        <Link to ='/profilesell'>
          <MenuButton name="판매 등록"/>
         </Link>
      </div>

      <Row>
          <Col lg="4" ><ProductCard /></Col>
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