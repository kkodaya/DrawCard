import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './component/Header';
import Main from './pages/Main';
import MainProfile from './pages/MainProfile';
import ProfileSell from './pages/ProfileSell';
import CardDetail from './pages/CardDetail';
import CardBuy from './pages/CardBuy';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
        <Routes>
          {/* 메인 페이지 이동 기본 값 */}
          <Route path="/" element={<Main/>}/>
          {/* 프로필 페이지 이동 */}
          <Route path="/mainprofile" element={<MainProfile/>}/>
          {/* 프로필 구매 페이지 페이지 이동 */}
          <Route path="/profilesell" element={<ProfileSell/>}/>
          {/* 명함 상세 페이지 페이지 이동 */}
          <Route path="/carddetail" element={<CardDetail/>}/>
          {/* 명함 구매 페이지 페이지 이동 */}
          <Route path="/cardbuy" element={<CardBuy/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
